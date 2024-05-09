'use client'
import React from 'react';
import Image from "next/image";
import Cart from "../../../../public/icons/ShoppingCart.svg"
import styles from './ShoppingCart.module.scss'
import { Button } from '../Button/Button'
import { AppContext } from '../../page';


type propsType = {
    productsInTheCart?: number;
    // countAdd?: any;
};


export function ShoppingCart ({productsInTheCart = 0 }: propsType)  {
    const {state, setState} = React.useContext(AppContext)

    
    return (
        <div className={styles.cartBlock}>
            <Image src={Cart} alt="" />
            <p>{state}</p>
            <p>позицій</p>
        </div>
    )
}