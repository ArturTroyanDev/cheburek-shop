"use client"
import React from 'react';
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import { Button } from "../Button/Button";
import { ProductPopup } from "../ProductPopup/ProductPopup"
import { Console } from 'console';


// console.log(productCardImages[0].image)

type Props = {
    image: any,
    title: string,
    price: number,

}

export function ProductCard({ image, title, price }: Props) {
    const [buttonPopup, setButtonPopup] = React.useState(false)

    return (

        <div className={styles.block}>
            <Image
                className={styles.img}
                blurDataURL='none'
                src={image}
                alt="cheburek"
                width={428}
                height={380}
                placeholder="blur"
            />
            <div className={styles.content}>
                <h4 className={styles.title}>{title}</h4>
                <div className={styles.price}>{price + "₴"}</div>
                <Button text={'Додати в кошик'} onClick={() => setButtonPopup(true)}/>


                <ProductPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h1>Nigga</h1>
                    <div></div>
                </ProductPopup>



            </div>
        </div>


    )
}
// сделать попап меню при нажатии на кнопку