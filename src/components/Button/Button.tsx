'use client'
import React from 'react';
import styles from './Button.module.scss'
import { useContextValue } from '@/context/ContextValue';

type Props = {
    // id: any,
    // className: any,
    onClick: () => void,
    text: string,

}

export function Button({ onClick, text = "button" }: Props) {
    return (
        <button className={styles.btnProductCard} onClick={onClick}>{text}</button>
    )
}

