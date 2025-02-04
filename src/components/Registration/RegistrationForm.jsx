import PropTypes from "prop-types";
import styles from "./RegistrationForm.module.css";
import {useRegister} from "../../hooks/useRegister.js";
import {useState} from "react";
import {useLogin} from "../../hooks/useLogin.js";

export function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const {register, isRegisterLoading} = useRegister();
    const {login, isLoginLoading} = useLogin();
    const [isRegistration,setIsRegistration]  = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegistration) {
            register(username, email, password, password2);
        }
        else{
            login(username, password);
        }
    }

    if (isRegistration) {
        return (
            <form className={styles.main} onSubmit={handleSubmit}>
                <div className={styles.form_header}>
                    <h2>Get started for free</h2>
                    <p>Access advanced bla bla</p>
                </div>
                <div className={styles.form_body}>
                    <input placeholder="Your email" type="text" id="mail" onInput={e => setEmail(e.target.value)}/>
                    <input placeholder="Your unique username" type="text" id="username" onInput={e => setUsername(e.target.value)}/>
                    <input placeholder="Password" type="password" id="password" onInput={e => setPassword(e.target.value)}/>
                    <input placeholder="Repeat password" type="password" id="confirmPassword" onInput={e => setPassword2(e.target.value)}/>
                    <button type="submit" disabled={isRegisterLoading}>Register</button>
                </div>
                <div className="form-footer">
                    Already a member? <a onClick={() => setIsRegistration(false)}>Log in.</a>
                </div>
            </form>
        );
    }
    else{
        return (
            <form onSubmit={handleSubmit} className={styles.main}>
                <div className={styles.form_body}>
                    <h2>Log onto your account</h2>
                </div>
                <div className={styles.form_body}>
                    <input placeholder="Your login" type="text" id="username" onInput={e => setUsername(e.target.value)}/>
                    <input placeholder="Password" type="password" id="password" onInput={e => setPassword(e.target.value)}/>
                    <button type="submit" disabled={isLoginLoading}>Login</button>
                </div>
                <div className="form-footer">
                    Don&#39;t have an account? <a onClick={() => setIsRegistration(true)}>Register.</a>
                </div>
            </form>
        );
    }

}

RegistrationForm.propTypes = {

}

