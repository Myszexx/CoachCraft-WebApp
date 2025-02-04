import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../context/AppContext.jsx";
import styles from './ProfileWindow.module.css';

export function ProfileWindow() {
    const {username} = useAppContext();
    const navigate = useNavigate();

    const profilePicture = (username) => {
      console.log("Fetching profile picture for", username);
        return `https://placehold.co/400x400`;
    }

    return (
        <div className={styles.profileWindow}>
            <img src={profilePicture(username)} alt={username} onClick={() => navigate("/dashboard/profile")}/>
        </div>
    )
}