import {useState} from "react";
import {useJWT} from "./useJWT.js";
import config from "../../config.api.json";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../context/AppContext.jsx";

export function useLogin() {
    const { setAccessToken, setRefreshToken, removeTokens} = useJWT();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { setUserState, setUserIdState } = useAppContext();

    const  login = async (username, password) => {
        setIsLoading(true);
        try {
            const res = await fetch(config.api + 'core/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });
            if (res.status === 200) {
                const data = await res.json();
                console.log(data);
                setAccessToken(data.token.acc);
                setRefreshToken(data.token.rfr);
                setUserState(data.username);
                setUserIdState(data.user_id);
                navigate('/dashboard');
            } else {
                const errorText = await res.text();
                alert("Login failed: " + errorText);
            }
        } catch (err) {
            console.error("Login failed:", err);
            alert("Login faiddled: " + err.message);
        } finally {
            setIsLoading(false);
        }
    }

    const logout = () => {
        removeTokens();
        setUserState(null);
        setUserIdState(null);
        navigate('/register');
    }

    return {login,logout, isLoading};
}