"use client"
import React from 'react'
import styles from './burgerMenu.module.scss'
import { useContextValue } from "@/context/ContextValue";


export function BurgerMenu() {
    const { sidebarFlag, setSidebarFlag } = useContextValue()
    
    const setSidebarActive = () => {
        setSidebarFlag(!sidebarFlag)
    }

    return (
        <button onClick={setSidebarActive} className={styles.burger} id="burger">
            <span></span><span></span><span></span>
        </button>
    )

}


