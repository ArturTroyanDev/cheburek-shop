'use client'

import React from 'react';
import Image from "next/image";
import cart from "../../../../public/icons/ShoppingCart.svg"
import styles from './ShoppingCart.module.scss'
import { useContextValue } from "@/context/ContextValue";

// import { AppContext } from '../../page';


// type Type = {
//     num: Number;
// }


export function ShoppingCart() {

    const { productCount } = useContextValue()

    // console.log("componentShoppingCard: " + value)


    return (
        <div className={styles.cartBlock}>
            <Image className={styles.img} src={cart} alt="bin" />
           
            <span className={styles.counterWrapper}>
                <p className={styles.counter}>{productCount}</p>
            </span>
        </div>
    )
}