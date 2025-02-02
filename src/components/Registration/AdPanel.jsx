import styles from './AdPanel.module.css';


export function AdPanel() {
    const fieldSrc = 'src/assets/Soccer_field.png';

    return(
        <div className={styles['add']}>
            <h1>Ready for the game?</h1>
            <h3>Discover the perfect strategy for every match!</h3>
            <img id="RegisterAd" src={fieldSrc}/>
            <p>Analyze plays and tactics on the go!</p>
        </div>
    );
}