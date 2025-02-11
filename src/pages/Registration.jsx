import { useAppContext } from '../context/AppContext';
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";
import {AdPanel} from "../components/Registration/AdPanel.jsx";
import {SimpleHeader} from "../components/SimpleHeader.jsx";
import {RegistrationForm} from "../components/Registration/RegistrationForm.jsx";
import styles from "./Registration.module.css";

export function Registration({
                                 redirectPath = '/dashboard',
                             }) {
    const { userId } = useAppContext();



    if (userId ) {
        alert("You are already logged in as " + userId);
        return <Navigate to={redirectPath} replace/>;
    }
    return (
        <>
        <SimpleHeader/>
        <div className={styles.main}>
            <AdPanel/>
            <RegistrationForm/>
        </div>
        </>
    );

}

Registration.propTypes = {
    redirectPath: PropTypes.string,
}
