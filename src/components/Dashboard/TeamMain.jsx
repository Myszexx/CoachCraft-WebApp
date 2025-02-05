import styles from './TeamMain.module.css';
import {useThemes} from "../../hooks/useThemes.js";

export function TeamMain() {
    const {themeContent} = useThemes();

    return (
        <>
            <h1>Team Management</h1>
            <p>Team Management Content</p>
        </>
    )
}