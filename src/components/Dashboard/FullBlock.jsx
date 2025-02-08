import styles from '../Dashboards/Team/TeamMain.module.css';
import {useThemes} from "../../hooks/useThemes.js";
import {Route, Routes} from "react-router-dom";
import {TeamMain} from "../Dashboards/Team/TeamMain.jsx";

export function FullBlock() {
    const {themeContent} = useThemes();

    return (
        <div className={styles.main} style={themeContent}>
            <Routes>
                <Route path={"team-main/*"} element={<TeamMain/>}/>
            </Routes>
        </div>
    )
}