'use client'
import React from 'react';
import Image from "next/image";
import cart from "../../../public/icons/ShoppingCart.svg"
import styles from './ShoppingCart.module.scss'
import { useContextValue } from "../../context/ContextValue";
import Link from 'next/link'
import { useSelector } from 'react-redux';
import type { RootState  } from '../utils/redux/store';




export function ShoppingCart() {
    const productCount = useSelector((state: RootState) => state.counter.productCount)


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