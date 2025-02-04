import styles from './Header.module.css';
import {LoginWindow} from "../LoginWindow.jsx";
import {useAppContext } from "../../context/AppContext.jsx";

export function Header(){
    const {login, logout} = useAppContext();
    const handleLogin = () =>{
        event.preventDefault();
        login(login);

    }

    const handleRegister = () => {
        event.preventDefault();
        console.log("User registered!");
        login(login);
    };

    const handleLogout = () =>{
        logout();
    }

    return (
       <header className={styles.header}>
            <h1>Witaj przyjacielu</h1>
            <LoginWindow onLogin={handleLogin} onRegister={handleRegister} onLogout={handleLogout}/>
       </header>
    )
}