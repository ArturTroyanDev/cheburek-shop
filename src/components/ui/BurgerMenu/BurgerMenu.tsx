"use client"
import React from 'react'
import styles from './burgerMenu.module.scss'
import classNames from 'classnames';
import { toggleSidebarFlag } from '../../../redux/slices/flagSlice'
import { useAppSelector, useAppDispatch } from '@/redux/hooks';

export function BurgerMenu() {
    const dispatch = useAppDispatch()
    const sidebarFlag = useAppSelector((state) => state.flag.sidebarFlag)
    const isburgerActive = classNames(styles.burger, {
        [styles.active]: sidebarFlag
    })

    return (
    <button onClick={() => dispatch(toggleSidebarFlag(!sidebarFlag))} className={isburgerActive} id="burger">
      <span className={styles.stick}></span>
      <span className={styles.stick}></span>
      <span className={styles.stick}></span>
    </button>
    )

}


