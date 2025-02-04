import { useAppContext } from '../context/AppContext';
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";
import {AdPanel} from "../components/Registration/AdPanel.jsx";
import {useState} from "react";
import {SimpleHeader} from "../components/SimpleHeader.jsx";
import {RegistrationForm} from "../components/Registration/RegistrationForm.jsx";
import styles from "./Registration.module.css";

export function Registration({
                                 redirectPath = '/dashboard',
                             }) {
    const { user } = useAppContext();



    if (user) {
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
