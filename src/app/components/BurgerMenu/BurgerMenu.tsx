"use client"
import React from 'react'
import styles from './burgerMenu.module.scss'


export function BurgerMenu(params: any) {
    const onClickSetActive = () => {

    }

    return (
        <button onClick={onClickSetActive} className={styles.burger} id="burger">
            <span></span><span></span><span></span>
        </button>
    )

}


