'use client'
import React from 'react';
import styles from './Button.module.scss'
// import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { useContextValue } from '@/context/ContextValue';



export function Button({
    text = 'Додати в кошик', }: { text?: String; }) {

    const { productCount, setProductCount } = useContextValue()

    function handleClick() {
        setProductCount(productCount + 1)
    }

    // console.log("componentButton: " + value)

    return (
        // <div className={styles.buttonWrap}>
            <button onClick={handleClick} className={styles.button}>
                {text}
            </button>
        // </div>

    );
} 

