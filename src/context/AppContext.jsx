/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';
import {useLogin} from "../hooks/useLogin.js";

const AppContext = createContext();

export function AppProvider(props) {
    const [user, setUser] = useState(null);
    // const [clientId, setClientId] = useState(null);
    const [loginType, setLoginType] = useState(null);
    // const [teams, setTeams] = useState([]);

    const login = (username) => {
        setUser(() => {return username});
        useLogin(username);
    };

    const logout = () => {
        setUser(null);
    };
    return (
        <AppContext.Provider value={{ user, setUser, login, logout, loginType, setLoginType }}>
            {props.children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
