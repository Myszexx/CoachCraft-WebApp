import PropTypes from "prop-types";
import {useAppContext} from "../context/AppContext.jsx";
// import {useEffect} from "react";

// eslint-disable-next-line no-unused-vars
export function LoginWindow({onLogin, onRegister, onLogout}) {
    const {user} = useAppContext();

    // useEffect(() => {
    //
    // }, [user]);
    return (
        <div>
            <form>
                <input type={"text"} defaultValue={"Login"} name={"login"} />
                <input type={"password"} name={"password"} />
                {user ? (
                    <button onClick={onLogout}>Logout</button>
                    ):
                    (
                        <>
                            <button onClick={onLogin}>Login</button>
                            <button onClick={onRegister}>Register</button>
                        </>
                    )}

            </form>
        </div>
    )
}

LoginWindow.propTypes = {
    onLogin: PropTypes.func,
    onRegister: PropTypes.func,
    onLogout: PropTypes.func,
}