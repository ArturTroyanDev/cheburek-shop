"use client"
import React from 'react'
import styles from './burgerMenu.module.scss'
import classNames from 'classnames';

import { useContextValue } from "@/context/ContextValue";
// sidebarActive

export function BurgerMenu() {
    const { sidebarFlag, setSidebarFlag } = useContextValue()
    
    const setSidebarActive = () => {
        setSidebarFlag(!sidebarFlag)
    }

    const burgerClassname = classNames(styles.burger, {
        [styles.active]: sidebarFlag
    })

    return (
        <button onClick={setSidebarActive} className={burgerClassname} id="burger">
            <span className={styles.stick}></span><span className={styles.stick}></span><span className={styles.stick}></span>
        </button>
    )

}


