import {useState} from "react";
import config from "../../config.api.json";
import {useAppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";


export function useJWT() {
    const {Navigate} = useNavigate()
    const { acsToken, setAcsToken, setUserState, setUserIdState} = useAppContext();
    const [rfrToken, setRfrToken] = useState(() => {
        return localStorage.getItem("jwtRefreshToken");
    });

    const logout = () => {
        removeTokens();
        setUserState(null);
        setUserIdState(null);
        Navigate('/register');
    }

    const setRefreshToken = (newToken) => {
        console.log("Setting refresh token to", newToken);
        setRfrToken(newToken);
        localStorage.setItem("jwtRefreshToken", newToken);
    };

    const setAccessToken = (newToken) => {
        console.log("Setting access token to", newToken);
        setAcsToken(newToken);
    };

    const removeTokens = () => {
        setAcsToken(null);
        setRefreshToken(null);
    };

    const getAccess = () => {
        return acsToken;
    };

    const refreshAccess = async () => {
        fetch(config.api+"core/token/refresh/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refresh: rfrToken,
            }),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Failed to refresh token");
            })
            .then((data) => {
                setAcsToken(data.access);
            })
            .catch((err) => {
                if (err.code === 'token_not_valid'){
                    alert("Token expired");
                    logout();
                }
                console.error(err);
                alert("Not logged in");
                logout();
            });
    }

    return {acsToken, setRefreshToken,setAccessToken, removeTokens, getAccess, refreshAccess};
}