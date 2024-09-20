"use client" // because this component uses context wich is a client side component
import styles from "./ProductPopup.module.scss"
import React from "react";
import Image from "next/image";
import classNames from 'classnames';
import { Button } from "../ui/Button/Button";
import { FoodSupplements } from "../FoodSupplements/FoodSupplements";
import { useAppDispatch } from "@/redux/hooks"
import { addProduct } from "../../redux/slices/shoppingCartSlice";


type Props = {
    flag: boolean,
    setFlag?: any,
    children?: React.ReactNode,
    id: number,
    title: string,
    price: number,
    src: string,
}
interface Item {
    id: number,
    title: string,
    price: number,
    src: string,
}

export function ProductPopup({ flag, setFlag, id, title, price, src, children }: Props) {
    const dispatch = useAppDispatch()
    const onClickAdd = () => {
        const item: Item = {
            id,
            title,
            price,
            src,
        };
        // console.log(item.id)
        dispatch(addProduct(item))
        setFlag(false)
    }
    // console.log(title)

    const isPopupActive = classNames(styles.popup, {
        [styles.active]: flag
    });

    const isPopupContainerActive = classNames(styles.container, {
        [styles.active]: flag
    });

    const isBlurActive = classNames(styles.blur, {
        [styles.active]: flag
    });

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
    // console.log(id)

    return (
        <div className={isPopupActive} onClick={() => {setFlag(false)}}>
            <div className={isBlurActive}></div>
            <div className={isPopupContainerActive} onClick={e => e.stopPropagation()}>
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
                        <Button className={styles.button} onClick={onClickAdd}>{"Додати: " + price + "₴"}</Button>
                        {/* When I open any product the info what i get from productCard alredy wrond */}
                    </div>

                </div>



            </div>
        </div>
    )
}
