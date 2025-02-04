import styles from './MainBoard.module.css';
export function MainBoard() {
    const defaultGrid = [
        {
            id: 1,
            title: "Block 1",
            content: "block1/preview",
            styles:{
                gridArea: `5 / 1 / 7 / 5`,
            }
        },
        {
            id: 2,
            title: "Block 2",
            content: "block2/preview",
            styles:{
                gridArea: `3 / 1 / 5 / 5`,
            }
        },
        {
            id: 3,
            title: "Block 3",
            content: "block3/preview",
            styles:{
                gridArea: `1 / 1 / 3 / 3`,
            }
        },
        {
            id: 4,
            title: "Block 4",
            content: "block4/preview",
            styles:{
                gridArea: '1 / 3 / 3 / 5',
            }
        },
        {
            id: 5,
            title: "Block 5",
            content: "block5/preview",
            styles:{
                gridArea: '1 / 5 / 11 / 9',
            }
        },
    ];


    return (
        <div className={styles.grid}>
            {defaultGrid.map((cardData) => {
                return (
                        <div style={cardData.styles} key={cardData.id} className={styles.card}>
                            <h3>{cardData.title}</h3>
                            <p>{cardData.content}</p>
                        </div>
                )
            })}
        </div>
    );
}