'use client'
import React from 'react';
import styles from './Button.module.scss'
import { useContextValue } from '@/context/ContextValue';

type Props = {
    // id: any,
    // className: any,
    onClick: () => void,
    children: string,

}

export function Button({onClick, children }: Props) {
    return (
        <button
            className={styles.btnProductCard}
            onClick={onClick}>
            {children}
        </button>
    )
}

