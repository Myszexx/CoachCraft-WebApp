/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider(props) {
    const [user, setUser] = useState(
        localStorage.getItem("user") ? localStorage.getItem("user")==="null" ? null : localStorage.getItem("user") : null
    );
    const [teamId, setTeamId] = useState(
        localStorage.getItem("teamId") ? localStorage.getItem("teamId")==="null" ? null : localStorage.getItem("teamId") : null
    );
    const [userId, setUserId] = useState(
        localStorage.getItem("userId") ? localStorage.getItem("userId")==="null" ? null : localStorage.getItem("userId") : null
    );
    const [dashboardTitle, setDashboardTitle] = useState("Dashboard");

    const [loginType, setLoginType] = useState(null);

    const [acsToken, setAcsToken] = useState({'access': null, 'refresh': null});

    const setTeamIdState = (newTeamId) => {
        setTeamId(newTeamId);
        localStorage.setItem("teamId", newTeamId);
    }

    const setUserState = (newUser) => {
        setUser(newUser);
        localStorage.setItem("user", newUser);
    }

    const setUserIdState = (newUserId) => {
        setUserId(newUserId);
        localStorage.setItem("userId", newUserId);
    }

    return (
        <AppContext.Provider value={
            {
                user, setUserState,
                userId, setUserIdState,
                teamId, setTeamIdState,
                loginType, setLoginType,
                acsToken, setAcsToken,
                dashboardTitle, setDashboardTitle
            }
        }>
            {props.children}
        </AppContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
    return useContext(AppContext);
}
