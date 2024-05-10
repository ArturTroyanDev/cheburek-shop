import Image from 'next/image'
import cheburek from "../../../../public/cheburek1.jpg"

import styles from './ProductCard.module.scss'

// console.log(Cheburek)

export function ProductCard() {

    return (
        <>
        <div className={styles.block}>
            <Image src={cheburek} alt=""/> 

             
        </div>
        </>
    )
}