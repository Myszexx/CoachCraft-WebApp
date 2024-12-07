/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function AppProvider(props) {
    const [user, setUser] = useState(null);
    const [teams, setTeams] = useState([]);

    return (
        <AppContext.Provider value={{ user, setUser, teams, setTeams }}>
            {props.children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
