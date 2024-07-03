'use client'
import React from 'react';
import Image from "next/image";
import cart from "../../../public/icons/ShoppingCart.svg"
import styles from './ShoppingCart.module.scss'
import { useContextValue } from "../../context/ContextValue";
import Link from 'next/link'



export function ShoppingCart() {
    const { productCount } = useContextValue()
    // const [open, setOpen] = React.useState(false);


    return (
        <Link href="/ShoppingCart">
            <div className={styles.cartWrapper}>
                <div className={styles.cartBlock}>
                    <Image className={styles.img} src={cart} alt="bin" />
                    <span className={styles.counterWrapper}>
                        <p className={styles.counter}>{productCount}</p>
                    </span>
                </div>
            </div>
        </Link>
    )
}