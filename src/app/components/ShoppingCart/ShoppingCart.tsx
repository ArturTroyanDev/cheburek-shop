'use client'

import React from 'react';
import Image from "next/image";
import Cart from "../../../../public/icons/ShoppingCart.svg"
import styles from './ShoppingCart.module.scss'
import { Button } from '../Button/Button'
import { ContextWrapper, useProductCounter } from "@/context/contextProductsCounter";

// import { AppContext } from '../../page';


// type Type = {
//     num: Number;
// }


export function ShoppingCart() {

    const {count, setCount} = useProductCounter()

    return (
        <div className={styles.cartBlock}>
            <Image src={Cart} alt="" />
                <p>{count}</p>

            <p>позицій</p>
        </div>
    )
}