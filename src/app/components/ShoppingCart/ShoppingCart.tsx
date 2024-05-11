'use client'

import React from 'react';
import Image from "next/image";
// import Cart from "../../../../public/icons/shoppingCart.svg"
import styles from './ShoppingCart.module.scss'
import { useProductCounter } from "@/context/contextProductsCounter";

// import { AppContext } from '../../page';


// type Type = {
//     num: Number;
// }


export function ShoppingCart() {

    const {count} = useProductCounter()

    return (
        <div className={styles.cartBlock}>
            {/* <Image src={Cart} alt="" /> */}
                <p>{count}</p>

            <p>позицій</p>
        </div>
    )
}