"use client"
import React from 'react';
import Image from 'next/image'
import styles from './cartItem.module.scss'

import { Button } from "../ui/Button/Button";
import { ProductPopup } from "../ProductPopup/ProductPopup"
import { DoubleButton } from '../ui/DoubleButton/DoubleButton';
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import type { RootState } from '../utils/redux/store'
import { setProductPopUpFlag } from '../../redux/slices/flagSlice'


type Props = {
    title: string,
    price: number,
    src: string,
    alt?: string,
    width?: number,
    height?: number,
    id: number,
}




export default function CartItem({ title, price, id, src, alt, width, height }: Props) {
    const dispatch = useAppDispatch()
    const popupFlag = useAppSelector((state) => state.flag.productPopUpFlag)
    const cartItem = useAppSelector((state) => state.shoppingCart.items.find((obj) => obj.id == id))
    const { items, totalCount } = useAppSelector((state) => state.shoppingCart)
    const addedCount = cartItem ? cartItem.count : 0

    // const changeProductPopUpFlag = (flag: boolean) => {
    //     dispatch(setProductPopUpFlag(flag))
    // }
    popupFlag ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    return (
        <div className={styles.block}>
            {/* <DynamicPlaceholderBlur src={image} alt={alt} width={width} height={height} /> */}
            {/* {child} */}
            <Image
                className={styles.image}
                src={src}
                alt={'productCart'}
                width={width}
                height={height}
                priority

            />
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <DoubleButton count={addedCount} secondaryAppearance={true} />
                <div className={styles.price}>{price + "₴"}</div>
            </div>
        </div>
    )
}