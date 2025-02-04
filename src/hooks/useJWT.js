import {useState} from "react";
import config from "../../config.api.json";
import {useAppContext} from "../context/AppContext.jsx";


export function useJWT() {
    const { acsToken, setAcsToken} = useAppContext();
    const [rfrToken, setRfrToken] = useState(() => {
        return localStorage.getItem("jwtRefreshToken");
    });

    const setRefreshToken = (newToken) => {
        setRfrToken(newToken);
        localStorage.setItem("jwtRefreshToken", newToken);
    };

    const setAccessToken = (newToken) => {
        setAcsToken(newToken);
    };

    const removeTokens = () => {
        setAcsToken(null);
    };

    const getAccess = () => {
        return acsToken;
    };

    const refreshAccess = () => {
        fetch(config.api+"refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({rfrToken}),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Failed to refresh token");
            })
            .then((data) => {
                setAcsToken(data.accessToken);
            })
            .catch((err) => {
                console.error(err);
                removeTokens();
            });
    }

    return {acsToken, setRefreshToken,setAccessToken, removeTokens, getAccess, refreshAccess};
}