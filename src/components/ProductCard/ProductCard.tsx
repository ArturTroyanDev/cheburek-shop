"use client"
import React from 'react';
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import { Button } from "../Button/Button";
import { ProductPopup } from "../ProductPopup/ProductPopup"

import { productCardImages } from "../assets/productCardData/productCardDaraArray"


// console.log(productCardImages[0].image)

type Props = {
    image: any,
    title: string,
    price: number,

}

export function ProductCard({ image, title, price }: Props) {
    const [popupActive, setPopupActive] = React.useState(false)

    // console.log(popupActive)

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
                <Button text={'Додати в кошик'} onClick={() => setPopupActive(true)} />


                <ProductPopup active={popupActive} setActive={setPopupActive} image={image} title={title} price={price}>
                    <div>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod aliquam quibusdam voluptatem laudantium asperiores quia corporis natus sed. Laboriosam non optio corporis ducimus commodi debitis similique quas possimus qui."
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod aliquam quibusdam voluptatem laudantium asperiores quia corporis natus sed. Laboriosam non optio corporis ducimus commodi debitis similique quas possimus qui."
                    </div>
                </ProductPopup>



            </div>
        </div>


    )
}
// сделать попап меню при нажатии на кнопку