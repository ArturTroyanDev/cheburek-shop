"use client"
import React from 'react'
import Image from "next/image"
import styles from "./sidebar.module.scss"
import cheburek from "../../../../public/foodIcons/cheburek.svg"
import { ProductSearch } from "../ProductSearch/ProductSearch"
import classNames from 'classnames';



export function Sidebar() {
    const [active, setActive] = React.useState(false);

    const switchSidebarState = () => {
        setActive(!active)
    }

    const sidebarClassname = classNames(styles.sidebar, {
        [styles.active]: active
    })


    return (
        <div onClick={switchSidebarState}
            className={sidebarClassname}>
            <ProductSearch />

            <ul className={styles.categories}>
                <li className={styles.item}>
                    <Image src={cheburek} alt="cheburek" />
                    <span className={styles.title}>Чебуреки</span>
                </li>
                <li className={styles.item}>
                    <Image src={cheburek} alt="cheburek" />
                    <span className={styles.title}>Чебуреки</span>
                </li>
                <li className={styles.item}>
                    <Image src={cheburek} alt="cheburek" />
                    <span className={styles.title}>Чебуреки</span>
                </li>
                <li className={styles.item}>
                    <Image src={cheburek} alt="cheburek" />
                    <span className={styles.title}>Чебуреки</span>
                </li>
                <li className={styles.item}>
                    <Image src={cheburek} alt="cheburek" />
                    <span className={styles.title}>Чебуреки</span>
                </li>
            </ul>
        </div>
    )

}