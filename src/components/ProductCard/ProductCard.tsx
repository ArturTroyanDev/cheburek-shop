"use client"
import Image from 'next/image'
// import {productCardImages} from "../assets/productCardData/productCardDataConstants"
import styles from './ProductCard.module.scss'
import { Button } from "../Button/Button";

// console.log(productCardImages[0].image)

type Props = {
    image: any,
    title: string,
    price: number,

}

export function ProductCard({image, title, price}: Props) {

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
                <Button />
            </div>
        </div>


    )
}
{/* <Image className={styles.img} src={cheburek2} alt="cheburek" />
                <Image className={styles.img} src={cheburek3} alt="cheburek" />
                <Image className={styles.img} src={cheburek4} alt="cheburek" /> */}