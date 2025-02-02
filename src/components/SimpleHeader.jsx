import styles from './SImpleHeader.module.css'

export function SimpleHeader() {
    return (
        <div className={styles.container}>
            <a href="/">
                <img src="src/assets/logo.svg" alt="logo" />
            </a>
        </div>
    )
}