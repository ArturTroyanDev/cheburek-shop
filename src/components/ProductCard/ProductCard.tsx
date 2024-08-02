"use client"
import React from 'react';
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import { Button } from "../ui/Button/Button";
import { ProductPopup } from "../ProductPopup/ProductPopup"
import DoubleButton from '../ui/DoubleButton/DoubleButton';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../utils/redux/store'
import { setProductCount } from '../utils/redux/slices/conterSlice'
import { setProductPopUpFlag } from '../utils/redux/slices/flagSlice'


type Props = {
    image?: string,
    title: string,
    price: number,

    src?: any,
    alt?: string,
    width?: number,
    height?: number,

    child?: React.ReactNode,
    id?: number,
}


export function ProductCard({ image, title, price, child, id, src, alt, width, height }: Props) {
    const dispatch = useDispatch()
    const productCount = useSelector((state: RootState) => state.counter.productCount)
    const popupFlag = useSelector((state: RootState) => state.flag.ProductPopUpFlag)

    const onChangeProductCount = (value: number) => {
        dispatch(setProductCount(value))
    }

    const handleChangeProductPopUpFlag = (flag: boolean) => {
        dispatch(setProductPopUpFlag(flag))
    }
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
                <div className={styles.price}>{price + "₴"}</div>
                {!productCount ?
                    <Button onClick={() => { handleChangeProductPopUpFlag(true) }}>{'Додати в кошик'}</Button> :
                    <DoubleButton
                        children={"У кошику: " + productCount}
                        onClickDecrease={() => onChangeProductCount(productCount - 1)}
                        onClickIncrease={() => handleChangeProductPopUpFlag(true)}
                    />
                }
                <ProductPopup flag={popupFlag} setFlag={handleChangeProductPopUpFlag} image={image} title={title} price={price} />
            </div>
        </div>
    )
}