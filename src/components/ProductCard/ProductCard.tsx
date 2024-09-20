"use client"
import React, { useEffect } from 'react';
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import { Button } from "../ui/Button/Button";
import { ProductPopup } from "../ProductPopup/ProductPopup"
import { DoubleButton } from '../ui/DoubleButton/DoubleButton';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector, useAppStore } from "../../redux/hooks"
import type { RootState } from '../utils/redux/store'
// import { setProductPopUpFlag } from '../utils/redux/slices/flagSlice'
import { Root } from 'react-dom/client';
import { setProductPopUpFlag } from '@/redux/slices/flagSlice';
import { removeProduct } from '@/redux/slices/shoppingCartSlice';
import { useScrollBlock } from "../utils/hooks/useScrollBlock";



type Props = {
    image?: string,
    title: string,
    price: number,
    src: string,
    alt?: string,
    width?: number,
    height?: number,
    child?: React.ReactNode,
    id: number,
}




export function ProductCard({ image, title, price, child, id, src, alt, width, height }: Props) {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();
    const dispatch = useAppDispatch()
    const popupFlag = useAppSelector(state => state.flag.productPopUpFlag)
    const cartItem = useAppSelector(state => state.shoppingCart.items.find((obj) => obj.id == id))

    // const func = () => {
    //     dispatch(removeProduct(cartItem.id))
    //     console.log(cartItem.id)
    // }
    // () => dispatch(removeProduct(cartItem.id))

    React.useEffect(()=> {
        if (popupFlag) {
            blockScroll()
        } else {
            allowScroll()
        }
    }, [popupFlag, isModalOpen, setIsModalOpen])
    

    return (
        <div className={styles.block}>
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
                <div className={styles.price}>{price + "₴"}</div>
                {!cartItem ?
                    <Button className={styles.button} onClick={() => dispatch(setProductPopUpFlag(true))}>Додати в кошик</Button> :
                    <DoubleButton
                        text={"у кошику"}
                        count={cartItem ? cartItem.count : 0}
                        onClickDecrease={() => dispatch(removeProduct(cartItem.id))}
                        onClickIncrease={() => dispatch(setProductPopUpFlag(true))}
                    />
                }
                <ProductPopup flag={popupFlag} setFlag={(flag: boolean) => dispatch(setProductPopUpFlag(flag))} id={id} title={title} price={price} src={src} />
            </div>
        </div>
    )
}