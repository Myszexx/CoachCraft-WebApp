import PropTypes from "prop-types";
import styles from "./PlayerCard.module.css";
import {useEffect, useState} from "react";
import Spinner from "../../Common/Spinner.jsx";
import config from "../../../../config.api.json";
import {useJWT} from "../../../hooks/useJWT.js";

export function PlayerCard({PlayerId, handleClose}) {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const {getAccess} = useJWT();
    const fetchDetails = async () => {
        console.log("Fetching details for player: " + PlayerId);
        await fetch(config.api + "players/" + PlayerId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(JSON.stringify(getAccess()))}`
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.code === 404) {
                    alert("Player not found");
                    handleClose(false);
                }
                else {
                    console.log(data);
                    setIsLoading(false);
                    setIsSuccess(true);
                }
            })
            .catch((error) => {
                setIsLoading(false);
                alert("Error fetching player details: " + error);
                handleClose(false);
                console.error("Error fetching player details: ", error);

            })};

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