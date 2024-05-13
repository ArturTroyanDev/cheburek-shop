'use client'

import React from 'react';
import Image from "next/image";
import cart from "../../../../public/icons/shoppingCart.svg"
import styles from './ShoppingCart.module.scss'
import { useProductCounter } from "@/context/contextProductsCounter";

// import { AppContext } from '../../page';


// type Type = {
//     num: Number;
// }


export function ShoppingCart() {

    const { count } = useProductCounter()

    return (
        <div className={styles.cartBlock}>
            <Image className={styles.img} src={cart} alt="bin" />
           
            <span className={styles.counterWrapper}>
                <p className={styles.counter}>{count}</p>
            </span>
        </div>
    )
}