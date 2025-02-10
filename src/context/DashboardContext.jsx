import { createContext, useState, useContext } from 'react';

const DashboardContext = createContext();

export function DashboardProvider(props) {
    const [teamId, setTeamId] = useState(null);


    return (
        <DashboardContext.Provider value={
            {
                teamId, setTeamId
            }
        }>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </DashboardContext.Provider>
    );
}

export function UseDashboardContext() {
    return useContext(DashboardContext);
}