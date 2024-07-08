"use client"
import React from 'react';
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import { Button } from "../Button/Button";
import { ProductPopup } from "../ProductPopup/ProductPopup"
import { useContextValue } from "../../context/ContextValue";
import plus from "../../../public/icons/plus.svg"
import minus from "../../../public/icons/minus.svg"
import { DynamicPlaceholderBlur } from '../DynamicPlaceholderBlur/DynamicPlaceholderBlur';

type Props = {
    image: string,
    title: string,
    price: number,

    alt?: string,
    width?: number,
    height?: number,
    child?: React.ReactNode;
}

export function ProductCard({ image, title, price, alt, width, height, child }: Props) {
    const [popupActive, setPopupActive] = React.useState(false)
    const { productCount, setProductCount } = useContextValue();
    const { sidebarFlag, setSidebarFlag } = useContextValue();



    const buttonState = () => {
        if (productCount === 0) {
            return <Button onClick={() => {
                setPopupActive(true)
                setSidebarFlag(false)
            }

            }>{'Додати в кошик'}</Button>
        }
        return (
            <div className={styles.doubleButton}>
                <Button style={styles.btnMinus} onClick={() => setProductCount(productCount - 1)}>
                    <Image
                        className={styles.imgMinus}
                        src={minus}
                        alt="-"
                    />
                </Button>
                {"У кошику: " + productCount}
                <Button style={styles.btnPlus} onClick={() => {
                    setPopupActive(true)
                    setSidebarFlag(false)
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

    // if popup active set sidebar false



    return (
        <div className={styles.block}>

            {/* <DynamicPlaceholderBlur src={image} alt={alt} width={width} height={height} /> */}
            {child}

            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.price}>{price + "₴"}</div>
                {buttonState()}
                <ProductPopup active={popupActive} setActive={setPopupActive} image={image} title={title} price={price} />
            </div>
        </div>
    )
}