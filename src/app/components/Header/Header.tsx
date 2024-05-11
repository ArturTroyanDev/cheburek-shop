import Image from "next/image"
import arrowDown from "../../../../public/icons/arrowDown.svg"
import styles from './Header.module.scss'

export function Header() {
    return (
        <div className={styles.head}>
            <div className="container header__container">
                <header className={styles.header}>
                    <button className={styles.burger} id="burger">
                        <span></span><span></span><span></span>
                    </button>
                    <h1 className={styles.title}>CHEBUREK & PONCHIK </h1>
                    <button className={styles.languageSwitcher}>
                        <p>UA</p>

                        <Image src={arrowDown} alt="" />

                    </button>
                    {/* <button className={styles.search}>
                        <div></div>
                    </button> */}
                </header>
            </div>
        </div>
    )
}
