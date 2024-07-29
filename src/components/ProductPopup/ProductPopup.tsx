"use client" // because this component uses context wich is a client side component
import styles from "./ProductPopup.module.scss"
import React from "react";
import Image from "next/image";
import classNames from 'classnames';
import { Button } from "../Button/Button";
import { useContextValue } from "../../context/ContextValue";
import { FoodSupplements } from "../FoodSupplements/FoodSupplements";

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../utils/redux/store'
import { setProductCount } from '../utils/redux/slices/conterSlice'



type Props = {
    flag: boolean,
    setFlag: any,
    children?: React.ReactNode,
    image?: string,
    title: string,
    price: number
}

export function ProductPopup({ flag, setFlag, image, title, price, children }: Props) {

    const dispatch = useDispatch()


    const productCount = useSelector((state: RootState) => state.counter.productCount)

    const incrementCount = (value: number) => {
        dispatch(setProductCount(value))
    }

    const onChangeCount = () => {
        incrementCount(productCount + 1)
        setFlag(false)
    }




    const isPopupActive = classNames(styles.popup, {
        [styles.active]: flag
    });

    const isPopupContainerActive = classNames(styles.container, {
        [styles.active]: flag
    });

    const isBlurActive = classNames(styles.blur, {
        [styles.active]: flag
    });
    // update this code


    const supplements = [
        {
            "id": 0,
            "title": "Огірок",
            "price": 5,
            "category": 1,
        },
        {
            "id": 1,
            "title": "Помідор",
            "price": 10,
            "category": 1,
        },
        {
            "id": 2,
            "title": "Творожок",
            "price": 20,
            "category": 2,
        },
        {
            "id": 3,
            "title": "Копчена Залупка",
            "price": 75,
            "category": 2,
        }
    ]

    return (
        <div className={isPopupActive} onClick={() => setFlag(false)}>
            <div className={isBlurActive}></div>
            <div className={isPopupContainerActive} onClick={e => e.stopPropagation()}> {/* preventing any parent event handlers from being executed */}
                <div className={styles.swipeBar}></div>
                <div className={styles.layout}>
                    {/* <Image
                        className={styles.image}
                        src={image}
                        alt="cheburek"
                        width={300}
                        height={328}
                        priority={true}

                    /> */}
                    <div className={styles.head}>
                        <div className={styles.info}>
                            <h4 className={styles.title}>
                                {title}
                            </h4>
                            <div className={styles.price}>
                                {price + "₴"}
                            </div>
                        </div>

                        <div className={styles.supplements}>
                            <h4 className={styles.title}>Додатково</h4>
                            <div className={styles.item}>
                                {
                                    supplements.map((obj) => <FoodSupplements key={obj.id} name={obj.title} price={obj.price} />)
                                }
                            </div>

                        </div>

                        <Button style={styles.button} onClick={onChangeCount}>{"Додати: " + price + "₴"}</Button>
                    </div>

                </div>



            </div>
        </div>
    )
}
