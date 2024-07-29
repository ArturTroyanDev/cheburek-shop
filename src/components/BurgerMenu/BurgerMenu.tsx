"use client"
import React from 'react'
import styles from './burgerMenu.module.scss'
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../utils/redux/store'
import { setSidebarFlag } from '../utils/redux/slices/flagSlice'

type Props = {
    style?: any,
}


export function BurgerMenu({ style }: Props) {
    const dispatch = useDispatch()
    const sidebarFlag = useSelector((state: RootState) => state.flag.sidebarFlag)
    const onChangeSidebarFlag = (flag: boolean) => {
        dispatch(setSidebarFlag(flag))
    }
    const setSidebarActive = () => {
        onChangeSidebarFlag(!sidebarFlag)
    }

    const isStylesSet = classNames(styles.button, {
        [style]: style
    });
    
    // make it possible to pass styles as an argument here. On the cart page it is planned to make a sidebar popup. So we need to make the burger menu on the cart page

    const burgerClassname = classNames(styles.burger, {
        [styles.active]: sidebarFlag
    })

    return (
        <button onClick={setSidebarActive} className={burgerClassname} id="burger">
            <span className={styles.stick}></span><span className={styles.stick}></span><span className={styles.stick}></span>
        </button>
    )

}


