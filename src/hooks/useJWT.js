import {useState} from "react";
import config from "../../config.api.json";


export function useJWT() {

    const [accessToken, setAccessToken] = useState(() => {
        return localStorage.getItem("jwtAccessToken");
    });
    const [refreshToken, setRefreshToken] = useState(() => {
        return localStorage.getItem("jwtRefreshToken");
    });

    const saveRefresh = (newToken) => {
        setRefreshToken(newToken);
        localStorage.setItem("jwtRefreshToken", newToken);
    };

    const removeTokens = () => {
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.removeItem("jwtAccessToken");
        localStorage.removeItem("jwtRefreshToken");
    };

    const getAccess = () => {
        return localStorage.getItem("jwtAccessToken");
    };

    const refreshAccess = () => {
        fetch(config.api+"/refresh", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({refreshToken}),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Failed to refresh token");
            })
            .then((data) => {
                setAccessToken(data.accessToken);
                localStorage.setItem("jwtAccessToken", data.accessToken);
            })
            .catch((err) => {
                console.error(err);
                removeTokens();
            });
    }

    return {accessToken, saveRefresh, removeTokens, getAccess, refreshAccess};
}