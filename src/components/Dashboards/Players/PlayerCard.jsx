import PropTypes from "prop-types";
import styles from "./PlayerCard.module.css";
import {useEffect, useState} from "react";
import Spinner from "../../Common/Spinner.jsx";
import {useJWT} from "../../../hooks/useJWT.js";
import {useAlert} from "../../../hooks/useAlert.js";

export function PlayerCard({PlayerId, handleClose}) {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const {axiosInstance} = useJWT();
    const {showAlert} = useAlert();


    const fetchDetails = async () => {
        console.log("Fetching details for player: " + PlayerId);
        let response = await axiosInstance.get("players/" + PlayerId);
        if (response.status === 404) {
            alert("Player not found");
            handleClose(false);
        }
        else {
            showAlert("Players not found", "error");
            setIsLoading(false);
            setIsSuccess(true);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, []);



    console.log("KARTA: ");
    if (isLoading) {
        return <Spinner/>;
    }
    else if (isSuccess) {
        return (
            <div className={styles.card}>
                <button onClick={() => handleClose(false)}></button>
                <h1>Player Card: {PlayerId}</h1>
            </div>
        );
    }

}

PlayerCard.propTypes = {
    PlayerId: PropTypes.number.isRequired,
    handleClose: PropTypes.func,
}