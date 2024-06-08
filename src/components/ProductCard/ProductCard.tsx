"use client"
import React from 'react';
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import { Button } from "../Button/Button";
import { ProductPopup } from "../ProductPopup/ProductPopup"
import { productCardImages } from "../assets/productCardData/productCardDaraArray"
import { useContextValue } from "@/context/ContextValue";
import plus from "../../../public/icons/plus.svg"
import minus from "../../../public/icons/minus.svg"
// console.log(productCardImages[0].image)

type Props = {
    image: any,
    title: string,
    price: number,

}

export function ProductCard({ image, title, price }: Props) {
    const [popupActive, setPopupActive] = React.useState(false)
    const [isButtonActive, setButtonActive] = React.useState(false)

    const { productCount, setProductCount } = useContextValue();

    // console.log("hui")

    const buttonState = () => {
        if (productCount < 1) {
            return <Button onClick={() => setPopupActive(true)}>{'Додати в кошик'}</Button>

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
                <Button style={styles.btnPlus} onClick={() => setPopupActive(true)}>
                    <Image
                        className={styles.imgPlus}
                        src={plus}
                        alt="+"
                    />
                </Button>

            </div >
        )

    }

    return (

        <div className={styles.block}>
            <Image
                className={styles.image}
                // blurDataURL='none'
                src={image}
                alt="cheburek"
                width={300}
                height={240}
                placeholder="blur"
            />
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.price}>{price + "₴"}</div>

                {buttonState()}

                <ProductPopup active={popupActive} setActive={setPopupActive} image={image} title={title} price={price} />
                


            </div>
        </div>


    )
}
// сделать попап меню при нажатии на кнопку