import styles from "./FullBlock.module.css";
import {useThemes} from "../../hooks/useThemes.js";
import {Route, Routes} from "react-router-dom";
import {TeamMain} from "../Dashboards/Team/TeamMain.jsx";
import {PlayersMain} from "../Dashboards/Players/PlayersMain.jsx";
import {MainScheduler} from "../Dashboards/Schedule/MainScheduler.jsx";

export function FullBlock() {
    const {themeContent} = useThemes();

    return (
        <div className={styles.main} style={themeContent}>
            <Routes>
                <Route path="team-main/*" element={<TeamMain/>}/>
                <Route path="players-main/*" element={<PlayersMain/>}/>
                <Route path="scheduler-main/*" element={<MainScheduler/>}/>
            </Routes>
        </div>
    )
}