import styles from './TeamMain.module.css';
import block_styles from '../Dashboards.module.css';
import {useThemes} from "../../../hooks/useThemes.js";
import {useState} from "react";
import {NinetyMinPicker} from "./NinetyMinPicker.jsx";
import {CustomTeamCreator} from "./CustomTeamCreator.jsx";

export function TeamMain() {
    const {themeContent} = useThemes();
    const [mode, setMode] = useState("90min");
    const hasTeam = false;

    if (hasTeam) {
        return (
            <div className={block_styles.main_block} style={themeContent}>
                <h1 style={{marginTop: "0px"}}>Team Management</h1>
                <p>Team Management Content</p>
            </div>
        )
    }
    else {
        if (mode === "90min") {
            return (
                <div className={block_styles.main_block} style={themeContent}>
                    <h1 style={{marginTop: "0px"}}>Choose Team</h1>
                    <div className={styles.modeButtons}>
                        <button onClick={() => setMode("90min")} style={{backgroundColor: mode === "90min" ? "white": themeContent.backgroundColor, color: mode === "90min" ? themeContent.backgroundColor: "white"}}>90min</button>
                        <button disabled={true} onClick={() => setMode("LNP")} style={{backgroundColor: mode === "LNP" ? "white": themeContent.backgroundColor, color: mode === "LNP" ? themeContent.backgroundColor: "white"}}>LNP</button>
                        <button onClick={() => setMode("Custom")} style={{backgroundColor: mode === "Custom" ? "white": themeContent.backgroundColor, color: mode === "Custom" ? themeContent.backgroundColor: "white"}}>Custom</button>
                    </div>
                    <div>
                        <NinetyMinPicker />
                    </div>
                    <p>Team Management Content</p>
                </div>
            )
        }
        else if (mode === "LNP") {
            return (
                <div className={block_styles.main_block} style={themeContent}>
                    <h1 style={{marginTop: "0px"}}>Choose Team</h1>
                    <div className={styles.modeButtons}>
                        <button onClick={() => setMode("90min")} style={{backgroundColor: mode === "90min" ? "white": themeContent.backgroundColor, color: mode === "90min" ? themeContent.backgroundColor: "white"}}>90min</button>
                        <button disabled={true} onClick={() => setMode("LNP")} style={{backgroundColor: mode === "LNP" ? "white": themeContent.backgroundColor, color: mode === "LNP" ? themeContent.backgroundColor: "white"}}>LNP</button>
                        <button onClick={() => setMode("Custom")} style={{backgroundColor: mode === "Custom" ? "white": themeContent.backgroundColor, color: mode === "Custom" ? themeContent.backgroundColor: "white"}}>Custom</button>
                    </div>
                    <p>Team Management Content</p>
                </div>
            )
        }
        else {
            return (
                <div className={block_styles.main_block} style={themeContent}>
                    <h1 style={{marginTop: "0px"}}>Choose Team</h1>
                    <div className={styles.modeButtons}>
                        <button onClick={() => setMode("90min")} style={{backgroundColor: mode === "90min" ? "white": themeContent.backgroundColor, color: mode === "90min" ? themeContent.backgroundColor: "white"}}>90min</button>
                        <button disabled={true} onClick={() => setMode("LNP")} style={{backgroundColor: mode === "LNP" ? "white": themeContent.backgroundColor, color: mode === "LNP" ? themeContent.backgroundColor: "white"}}>LNP</button>
                        <button onClick={() => setMode("Custom")} style={{backgroundColor: mode === "Custom" ? "white": themeContent.backgroundColor, color: mode === "Custom" ? themeContent.backgroundColor: "white"}}>Custom</button>
                    </div>
                    <div>
                        <CustomTeamCreator />
                    </div>
                </div>
            )
        }
    }
}