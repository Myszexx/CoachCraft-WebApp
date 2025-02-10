import PropTypes from "prop-types";
import styles from "./PlayerCard.module.css";

export function PlayerCard({PlayerId}) {
    return (
        <div className={styles.playerCard}>
            <h1>Player Card: {PlayerId}</h1>
        </div>
    );
}

PlayerCard.propTypes = {
    PlayerId: PropTypes.number.isRequired
}