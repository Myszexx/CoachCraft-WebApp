import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../context/AppContext.jsx";
import styles from './ProfileWindow.module.css';
// import {useLogin} from "../../hooks/useLogin.js";

export function ProfileWindow() {
    const {username} = useAppContext();
    const navigate = useNavigate();
    // const {logout} = useLogin()

    const profilePicture = (username) => {
      console.log("Fetching profile picture for", username);
        return `https://placehold.co/400x400`;
    }

    const handleProfileClick = () => {
        navigate("/dashboard/profile");
    }

    return (
        <div className={styles.profileWindow}>
            {/*<img src={profilePicture(username)} alt={username} onClick={() => navigate("/dashboard/profile")}/>*/}
            <img src={profilePicture(username)} alt={username} onClick={() => handleProfileClick()}/>
        </div>
    )
}