import {useThemes} from "../../../hooks/useThemes.js";
// import block_styles from "../Dashboards.module.css";
import styles from "./PlayersMain.module.css";
import {PlayerCard} from "./PlayerCard.jsx";

export function PlayersMain() {
    const {themeContent} = useThemes();
    const playersList = [
        {
            id: 1,
            name: "Player 1",
            team: "Team 1",
            position: "Position 1",
            age: 20
        },
        {
            id: 2,
            name: "Player 2",
            team: "Team 2",
            position: "Position 2",
            age: 21
        },
        {
            id: 3,
            name: "Player 3",
            team: "Team 3",
            position: "Position 3",
            age: 22
        },
        {
            id: 4,
            name: "Player 4",
            team: "Team 4",
            position: "Position 4",
            age: 23
        },
        {
            id: 5,
            name: "Player 5",
            team: "Team 5",
            position: "Position 5",
            age: 24
        },
        {
            id: 6,
            name: "Player 6",
            team: "Team 6",
            position: "Position 6",
            age: 25
        },
        {
            id: 7,
            name: "Player 7",
            team: "Team 7",
            position: "Position 7",
            age: 26
        },
        {
            id: 8,
            name: "Player 8",
            team: "Team 8",
            position: "Position 8",
            age: 27
        },
        {
            id: 9,
            name: "Player 9",
            team: "Team 9",
            position: "Position 9",
            age: 28
        },
        {
            id: 10,
            name: "Player 10",
            team: "Team 10",
            position: "Position 10",
            age: 29
        },
        {
            id: 11,
            name: "Player 11",
            team: "Team 11",
            position: "Position 11",
            age: 30
        },
        {
            id: 12,
            name: "Player 12",
            team: "Team 12",
            position: "Position 12",
            age: 31
        },
        {
            id: 13,
            name: "Player 13",
            team: "Team 13",
            position: "Position 13",
            age: 32
        },
        {
            id: 14,
            name: "Player 14",
            team: "Team 14",
            position: "Position 14",
            age: 33
        },
        {
            id: 15,
            name: "Player 15",
            team: "Team 15",
            position: "Position 15",
            age: 34
        },
        {
            id: 16,
            name: "Player 16",
            team: "Team 16",
            position: "Position 16",
            age: 35
        },
        {
            id: 17,
            name: "Player 17",
            team: "Team 17",
            position: "Position 17",
            age: 36
        },
        {
            id: 18,
            name: "Player 18",
            team: "Team 18",
            position: "Position 18",
            age: 37
        },
        {
            id: 19,
            name: "Player 19",
            team: "Team 19",
            position: "Position 19",
            age: 38
        },
        {
            id: 20,
            name: "Player 20",
            team: "Team 20",
            position: "Position 20",
            age: 39
        },
    ];


    const handlePlayerClick = (player) => {
        console.log(player);
    }
    const handlePlayerHover = (playerId) => {
        return <div style={
            {
                position: 'absolute',
                top: '0',
                left: '0',
                backgroundColor: 'rgba(255,0,0,0.96)',
                zIndex: '100'
            }
        }>
            <PlayerCard PlayerId={playerId}/>
        </div>
    }

    const generateBrowser = () => {
        return (
            <>
                {playersList.map((player) => {
                    return <span onMouseOver={() => handlePlayerHover(player.id)} onClick={() => handlePlayerClick(player.id)} key={player.id} className={styles.row}>{player.name}</span>
                })}
            </>
        );
    }
    return (
        <div className={styles.main} style={themeContent}>
            <h1>Players Main</h1>
            <div className={styles.browser}>
                {generateBrowser()}
            </div>
            <div className={styles.browserPage}>
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    );
}