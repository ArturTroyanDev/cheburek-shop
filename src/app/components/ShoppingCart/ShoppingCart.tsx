'use client'

import Image from "next/image";
import Cart from "../../../../public/icons/ShoppingCart.svg"
import styles from './ShoppingCart.module.scss'
import { Button } from '../Button/Button'

type propsType = {
    productsInTheCart?: number;
    // countAdd?: any;
};


export function ShoppingCart ({productsInTheCart = 0 }: propsType)  {
    
    return (
        <div className={styles.cartBlock}>
            <Image src={Cart} alt="" />
            <p>{}</p>
            <p>0 позицій</p>
        </div>
    )
}