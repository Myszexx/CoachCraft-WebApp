/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider(props) {
    const [user, setUser] = useState(
        localStorage.getItem("user") ? localStorage.getItem("user") : null
    );
    const [userId, setUserId] = useState(
        localStorage.getItem("userId") ? localStorage.getItem("userId") : null
    );

    const [loginType, setLoginType] = useState(null);

    const [acsToken, setAcsToken] = useState(null);

    const setUserState = (newUser) => {
        setUser(newUser);
        localStorage.setItem("user", newUser);
    }

    const setUserIdState = (newUserId) => {
        setUserId(newUserId);
        localStorage.setItem("userId", newUserId);
    }

    return (
        <AppContext.Provider value={{ user, setUserState,userId, setUserIdState, loginType, setLoginType, acsToken, setAcsToken }}>
            {props.children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
