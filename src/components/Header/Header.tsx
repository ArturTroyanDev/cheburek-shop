"use client"
import Image from "next/image"
import styles from './Header.module.scss'
import arrowDown from "../../../public/icons/arrowDown.svg"
import logo from "../../../public/icons/logo.svg"
import { ShoppingCart } from "../ui/ShoppingCart/ShoppingCart"
import { BurgerMenu } from "../ui/BurgerMenu/BurgerMenu"
import Link from 'next/link'
import { usePathname } from "next/navigation"

export function Header() {
    const pathname = usePathname()

    return (
        <div className={styles.head}>
            <div className="container header__container">
                <header className={styles.header}>
                    <div className={styles.nameWrapper}>
                        
                    {pathname !== '/ShoppingCart' ? <BurgerMenu /> : null}
                        
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
