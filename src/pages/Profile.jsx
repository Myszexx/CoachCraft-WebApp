import { useAppContext } from '../context/AppContext';
import {useJWT} from "../hooks/useJWT.js";
import {useEffect, useState} from "react";
import Spinner from "../components/Common/Spinner.jsx";
import { useNavigate } from 'react-router-dom';


export function Profile() {
    const navigate = useNavigate();
    const { user, userId } = useAppContext();
    const { axiosInstance } = useJWT();
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(true);
    const [teamsList, setTeamsList] = useState([]);

    const getUserData = async () => {
        const response = await axiosInstance.get('core/users_data/'+userId);
        if (response.status === 200) {
            console.log(response.data);
            // setUser(response.data);
        }
        else {
            setIsSuccess(false);
            return null;
        }
    }
    const getUserTeams = async () => {

        const response = await axiosInstance.get('teams/user_teams/'+userId);
        if (response.status === 200) {
            console.log(response.data);
            setTeamsList(response.data);
        }
        else {
            setIsSuccess(false);
            return null;
        }
    }

    useEffect(() => {
        setIsLoading(true);
        getUserData();
        getUserTeams();
        setIsLoading(false);
    }, []);


    if (isLoading){
        return (
            <div>
                <Spinner/>
            </div>
        );
    }
    else if (isSuccess) {
        return (
            <div>
                <h1>Your Profile</h1>
                <p>{user.name}</p>
                {() => {if (teamsList.length > 0) {
                    return (<select>
                        {teamsList.map((team) => {
                            return (
                                <option key={team.id} value={team.id}>
                                    {team.name}
                                </option>
                            )
                        })}
                </select>)
                }}}
            <button onClick={() => navigate('/dashboard/fs/team-main/')}>Add team</button>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>Something went wrong</h1>
            </div>
        );
    }
}
