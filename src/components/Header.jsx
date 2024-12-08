import styles from './Header.module.css';

export function Header(){
    return (
       <header className={styles.header}>
            <h1>Witaj przyjacielu</h1>
       </header>
    )
}