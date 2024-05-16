"use client"
import React from 'react'
import styles from "./sidebar.module.scss"
import Image from "next/image"
import cheburek from "../../../../public/foodIcons/cheburek.svg"
import classNames from 'classnames';
import { ProductSearch } from "../ProductSearch/ProductSearch"
import { useContextValue } from "@/context/ContextValue";



export function Sidebar() {
    const { sidebarFlag } = useContextValue();

    const sidebarClassname = classNames(styles.sidebar, {
        [styles.active]: sidebarFlag
    })


    return (
        <div
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