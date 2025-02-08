import styles from './MainBoard.module.css';
import {useThemes} from "../../hooks/useThemes.js";
import {Route, Routes} from "react-router-dom";
import {FullBlock} from "./FullBlock.jsx";
export function MainBoard() {
    const defaultGrid = [
        {
            id: 1,
            title: "Block 1",
            content: "block1/preview",
            url: "/block1",
            styles:{
                gridArea: `5 / 1 / 7 / 5`,
            }
        },
        {
            id: 2,
            title: "Block 2",
            url: "/block1",
            content: "block2/preview",
            styles:{
                gridArea: `3 / 1 / 5 / 5`,
            }
        },
        {
            id: 3,
            title: "Team Management",
            url: "/fs/team-main",
            content: "block3/preview",
            styles:{
                gridArea: `1 / 1 / 3 / 3`,
            }
        },
        {
            id: 4,
            title: "Block 4",
            url: "/block1",
            content: "block4/preview",
            styles:{
                gridArea: '1 / 3 / 3 / 5',
            }
        },
        {
            id: 5,
            title: "Block 5",
            url: "/block1",
            content: "block5/preview",
            styles:{
                gridArea: '1 / 5 / 11 / 9',
            }
        },
    ];
    const {themeContent} = useThemes();

    return (
        <Routes>
            <Route path="/" element={
            <div className={styles.grid}>
                {defaultGrid.map((cardData) => {
                    return (
                            <div style={Object.assign({},cardData.styles,themeContent)} key={cardData.id} className={styles.card} onClick={() => window.location.href = 'dashboard'+cardData.url}>
                                <h3>{cardData.title}</h3>
                                <div className={styles.cardContent}>{cardData.content}</div>
                            </div>
                    )
                })}
            </div>} />
            <Route path="fs/*" element={<FullBlock />} />

    </Routes>
    );
}