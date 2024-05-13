import Image from "next/image"
import arrowDown from "../../../../public/icons/arrowDown.svg"
import logo from "../../../../public/icons/logo.svg"
import styles from './Header.module.scss'
import { ShoppingCart } from "../ShoppingCart/ShoppingCart"

export function Header() {
    return (
        <div className={styles.head}>
            <div className="container header__container">
                <header className={styles.header}>

                    <button className={styles.burger} id="burger">
                        <span></span><span></span><span></span>
                    </button>

                    <span className={styles.logoWrapper}>
                        <Image src={logo} alt="" />
                    </span>
                    
                    <ShoppingCart />

                    <button className={styles.languageSwitcher}>
                        <p>UA</p>
                        <Image src={arrowDown} alt="" />

                    </button>
                </header>
            </div>
        </div>
    )
}
