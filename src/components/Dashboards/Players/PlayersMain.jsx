import {useThemes} from "../../../hooks/useThemes.js";
// import block_styles from "../Dashboards.module.css";
import config from "../../../../config.api.json";
import styles from "./PlayersMain.module.css";
import {PlayerCard} from "./PlayerCard.jsx";
import {useEffect, useState} from "react";
import {useJWT} from "../../../hooks/useJWT.js";
import Spinner from "../../Common/Spinner.jsx";
import {useAlert} from "../../../hooks/useAlert.js";

export function PlayersMain() {
    const {themeContent} = useThemes();
    const [playersList, setPlayersList] = useState([]);
    const [playerId, setPlayerId] = useState(null);
    const [page, setPage] = useState(0);
    const [isCardOpen,setIsCardOpen] = useState(false);
    const [isBrowserLoading, setIsBrowserLoading] = useState(false);
    const {axiosInstance} = useJWT();
    const {showAlert} = useAlert();

    const fetchPlayers = async () => {
        setIsBrowserLoading(true);
        let response = await axiosInstance.get("players/players");
        console.log(response);
                if (response.status === 200) {
                    setPlayersList(response.data);
                    console.log(response.data);
                    setIsBrowserLoading(false);
                }
                else {
                    showAlert("Players not found", "error");
                }

    }

    useEffect(() => {
        fetchPlayers();
    }, [page]);


    const handlePlayerClick = (playerId) => {
        console.log("PlayerID: " + playerId);
        setPlayerId(playerId);
        setIsCardOpen(true);
        if (isCardOpen && playerId>0)
        {
            setIsCardOpen(true);
            return <PlayerCard PlayerId={playerId} handleClose={setIsCardOpen}/>
        }
    }
    const handlePlayerHover = (playerId) => {
        // console.log("Hover" + playerId);

        return (<div style={
            {
                position: 'absolute',
                top: '0',
                left: '0',
                backgroundColor: 'rgba(255,0,0,0.96)',
                zIndex: '100'
            }
        }>
            <PlayerCard PlayerId={playerId}/>
        </div>)
    }

    const generateBrowser = () => {
        return (
            <>
                {playersList.map((player) => {
                    return <span onMouseOver={() => handlePlayerHover(player.id)} onClick={() => handlePlayerClick(player.id)} key={player.id} className={styles.row}>{player.first_name} {player.last_name}  Wiek: {player.player_age}</span>
                })}
            </>
        );
    }
    if (isBrowserLoading)
    {
        return (
            <div className={styles.main} style={themeContent}>
                <h1>Players Main</h1>
                <div className={styles.browser}>
                    <Spinner/>
                </div>
                <div className={styles.browserPage}>
                    <button>Previous</button>
                    <button onClick={async () => await fetchPlayers()}>Fetch</button>
                    <button>Next</button>
                </div>
            </div>
        );
    }
    else
    {
        if (isCardOpen)
        {
            return (
                <div className={styles.main} style={themeContent}>
                    <h1>Players Main</h1>
                    <PlayerCard PlayerId={playerId} handleClose={setIsCardOpen}/>
                    <div className={styles.browser}>
                        {generateBrowser()}
                    </div>
                    <div className={styles.browserPage}>
                        <button>Previous</button>
                        <button onClick={async () => await fetchPlayers()}>Fetch</button>
                        <button>Next</button>
                    </div>
                </div>
            );
        }
        else{
            return (
                <div className={styles.main} style={themeContent}>
                    <h1>Players Main</h1>
                    <div className={styles.browser}>
                        {generateBrowser()}
                    </div>
                    <div className={styles.browserPage}>
                        <button>Previous</button>
                        <button onClick={async () => await fetchPlayers()}>Fetch</button>
                        <button>Next</button>
                    </div>
                </div>
            );
        }
    }
}