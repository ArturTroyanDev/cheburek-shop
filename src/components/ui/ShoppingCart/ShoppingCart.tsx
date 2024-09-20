'use client'
import React from 'react';
import Image from "next/image";
import cart from "../../../../public/icons/ShoppingCart.svg"
import styles from './ShoppingCart.module.scss'
import Link from 'next/link'
import { useAppSelector } from '@/redux/hooks';




export function ShoppingCart() {
    // const productCount = useSelector((state) => state.counter.productCount)
    const { totalCount } = useAppSelector((state) => state.shoppingCart)


    return (
        <Link href="/ShoppingCart">
            <div className={styles.cartWrapper}>
                <div className={styles.cartBlock}>
                    <Image className={styles.img} src={cart} alt="bin" />
                    <span className={styles.counterWrapper}>
                        <p className={styles.counter}>{totalCount}</p>
                    </span>
                </div>
            </div>
        </Link>
    )
}