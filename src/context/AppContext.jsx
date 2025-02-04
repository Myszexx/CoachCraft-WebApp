/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';
import {useLogin} from "../hooks/useLogin.js";

const AppContext = createContext();

export function AppProvider(props) {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    // const [clientId, setClientId] = useState(null);
    const [loginType, setLoginType] = useState(null);
    // const [teams, setTeams] = useState([]);
    const [accessToken, setAccessToken] = useState(null);

    const login = (username) => {
        setUser(() => {return username});
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useLogin(username);
    };

    const logout = () => {
        setUser(null);
    };
    return (
        <AppContext.Provider value={{ user, setUser,userId, setUserId, login, logout, loginType, setLoginType, accessToken, setAccessToken }}>
            {props.children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
