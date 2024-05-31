'use client'
import React from 'react';
import styles from './Button.module.scss'
import { useContextValue } from '@/context/ContextValue';

type Props = {
    // id: any,
    // className: any,
    onClick?: () => void,
    text?: string,
    style?: any,
}

export function Button({ onClick, text = "+", style}: Props) {
    return (
        <button className={styles.btnProductCard} onClick={onClick}>{text}</button>
    )
}

