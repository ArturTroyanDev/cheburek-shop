"use client"
import Image from "next/image"
import styles from './Header.module.scss'
import arrowDown from "../../../public/icons/arrowDown.svg"
import logo from "../../../public/icons/logo.svg"
import { ShoppingCart } from "../ShoppingCart/ShoppingCart"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import Link from 'next/link'
import { isWindowBigger } from "../utils/assets/useWindowWitdthResize/useWindowWitdthResize"

export function Header() {
    // console.log(window.location.pathname)



    return (
        <div className={styles.head}>
            <div className="container header__container">
                <header className={styles.header}>
                    <div className={styles.nameWrapper}>
                        <BurgerMenu />
                        <Link href="/" className={styles.logoWrapper}>
                            <Image src={logo} alt="" priority />
                            <h2 className={styles.title}>CHEBUREK & PONCHIK </h2>
                        </Link>
                    </div>
                    <span className={styles.phoneNumber}>+380 63 303 32 16</span>

                    <div className={styles.btnsWrapper}>
                        <ShoppingCart />
                        <button className={styles.languageSwitcher}>
                            <p>UA</p>
                            <Image src={arrowDown} alt="" />
                        </button>
                    </div>

                </header>
            </div>
        </div>
    )
}
