import {useEffect, useState} from "react";
import config from "../../config.api.json";
import {redirect} from "react-router-dom";
import {useAppContext} from "../context/AppContext.jsx";

export function useRegister() {
    // const [isLoading, setIsLoading] = useState(false);
    const { setRefreshToken, setAccessToken, setUser, setUserId } = useAppContext();
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const register = async (username, email, password, password2) => {
        setIsLoading(true);
        try {
            const res = await fetch(config.api + 'core/registration/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                    password2: password2
                }),
            });

            if (res.status === 201) {
                const data = await res.json();
                setAccessToken(data.token.rfr);
                setRefreshToken(data.token.acc);
                setUser(data.username);
                setUserId(data.user_id);
                redirect('/dashboard');
            } else {
                const errorText = await res.text();
                alert("Registration failed: " + errorText);
            }
        } catch (err) {
            console.error("Registration failed:", err);
            alert("Registration failed: " + err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {register, isLoading};
}