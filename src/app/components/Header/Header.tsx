import styles from './Header.module.scss'

export function Header() {
    return (
        <div className={styles.head}>
            <div className="container">
                <header className={styles.header}>
                    <button className={styles.burger} id="burger">
                        <span></span><span></span><span></span>
                    </button>
                    <button className={styles.languageSwitcher}>
                        <p>UA</p>
                    </button>
                    <button className={styles.search}>
                        <div></div>
                    </button>
                </header>
            </div>
        </div>
    )
}