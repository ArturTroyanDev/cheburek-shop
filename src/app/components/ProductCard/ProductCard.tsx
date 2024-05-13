"use client"
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import cheburek1 from "../../../../public/foodPhotos/cheburek1_428x380px.jpg"
import cheburek2 from "../../../../public/foodPhotos/cheburek2_428x380px.jpg"
import cheburek3 from "../../../../public/foodPhotos/cheburek3_428x380px.jpg"
import cheburek4 from "../../../../public/foodPhotos/cheburek4_428x380px.jpg"
// import { CardList } from '../CardList/CardList'
import { Button } from "../Button/Button";


// console.log(Cheburek)

export function ProductCard() {

    return (
        <div className={styles.blockWrapper}>
            <div className={styles.block}>
                <Image

                    className={styles.img}
                    src={cheburek1}
                    alt="cheburek"
                />
                <h3 className={styles.title}>Чебурек с телятиной</h3>
                <div className={styles.price}>70₴</div>
                <Button />
            </div>
        </div>


    )
}
{/* <Image className={styles.img} src={cheburek2} alt="cheburek" />
                <Image className={styles.img} src={cheburek3} alt="cheburek" />
                <Image className={styles.img} src={cheburek4} alt="cheburek" /> */}