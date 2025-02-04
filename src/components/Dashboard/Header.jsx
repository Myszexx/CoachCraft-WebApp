import styles from './Header.module.css';
import {useAppContext } from "../../context/AppContext.jsx";
import {ProfileWindow} from "./ProfileWindow.jsx";

export function Header(){
    const { dashboardTitle} = useAppContext();



    return (
       <header className={styles.header}>
            <h1 className={styles.dashboardTitle}>{dashboardTitle}</h1>
            <div className={styles.profileWindow}>
                <ProfileWindow/>
            </div>
       </header>
    )
}