import Image from "next/image"
import styles from './Header.module.scss'
import arrowDown from "../../../public/icons/arrowDown.svg"
import logo from "../../../public/icons/logo.svg"
import { ShoppingCart } from "../ShoppingCart/ShoppingCart"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"

export function Header() {
    return (
        <div className={styles.head}>
            <div className="container header__container">
                <header className={styles.header}>

                    <BurgerMenu/>

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
