import PropTypes from "prop-types";
import styles from "./RegistrationForm.module.css";
import {useRegister} from "../../hooks/useRegister.js";
import {useState} from "react";

export function RegistrationForm({registration, onSubmit, changeState}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const {register, isLoading} = useRegister();
    const handleSubmit = (e) => {
        e.preventDefault();
        register(username, email, password, password2);
    }

    if (registration) {
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
                    <button type="submit" disabled={isLoading}>Register</button>
                </div>
                <div className="form-footer">
                    {/*Already a member? <div onClick={changeState(false)}>Log in.</div>*/}
                </div>
            </form>
        );
    }
    else{
        return (
            <form action={onSubmit} className={styles.main}>
                <div className={styles.form_body}>
                    <h2>Log onto your account</h2>
                </div>
                <div className={styles.main}>
                    <input type="text" id="username"/>
                    <input type="password" id="password"/>
                    <button value="Login" />
                </div>
                <div className="form-footer">
                    Don&#39;t have an account? <div onClick={changeState(true)}>Register.</div>
                </div>
            </form>
        );
    }

}

RegistrationForm.propTypes = {
    registration: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    changeState: PropTypes.func.isRequired,
}

