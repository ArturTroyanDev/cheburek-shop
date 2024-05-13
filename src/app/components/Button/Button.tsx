'use client'
import React from 'react';
import styles from './Button.module.scss'
// import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { ContextWrapper, TypeProvider, useProductCounter } from '@/context/contextProductsCounter';



export function Button({
    text = 'Додати в кошик', }: { text?: String; }) {

    const { count, setCount } = useProductCounter()

    function handleClick() {
        setCount(count + 1)
    }

    return (
        // <div className={styles.buttonWrap}>
            <button onClick={handleClick} className={styles.button}>
                {text}
            </button>
        // </div>

    );
} 

