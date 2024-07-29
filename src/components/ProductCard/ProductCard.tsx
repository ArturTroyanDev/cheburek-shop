"use client"
import React from 'react';
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import { Button } from "../ui/Button/Button";
import { ProductPopup } from "../ProductPopup/ProductPopup"
import plus from "../../../public/icons/plus.svg"
import minus from "../../../public/icons/minus.svg"

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

    const handleChange = (flag: boolean) => {
        dispatch(setProductPopUpFlag(flag))
    }




    const QuantityButton = () => {
        if (productCount === 0) {
            return <Button onClick={() => {
                handleChange(true)
                // setSidebarFlag(false)
            }

                // WHEN I clicked at sidebar, its true, when I clicked at button sidebar false but button is 

            }>{'Додати в кошик'}</Button>
        }

        return (
            <div className={styles.doubleButton}>
                <Button style={styles.btnMinus} onClick={() => onChangeProductCount(productCount - 1)}>
                    <Image
                        className={styles.imgMinus}
                        src={minus}
                        alt="-"
                    />
                </Button>


                {"У кошику: " + productCount}



                <Button style={styles.btnPlus} onClick={() => {
                    handleChange(true)
                }
                }>
                    <Image
                        className={styles.imgPlus}
                        src={plus}
                        alt="+"
                    />
                </Button>
            </div >
        )




    }

    popupFlag ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    return (
        <div className={styles.block}>

            {/* <DynamicPlaceholderBlur src={image} alt={alt} width={width} height={height} /> */}
            {child}

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

                {QuantityButton()}

                <ProductPopup flag={popupFlag} setFlag={handleChange} image={image} title={title} price={price} />
            </div>
        </div>
    )
}