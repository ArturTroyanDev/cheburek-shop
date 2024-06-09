import styles from "./ProductPopup.module.scss"
import React from "react";
import Image from "next/image";
import classNames from 'classnames';
import { Button } from "../Button/Button";
import { useContextValue } from "@/context/ContextValue";
import { FoodSupplements } from "../FoodSupplements/FoodSupplements";

type Props = {
    active: boolean,
    setActive: any,
    children?: React.ReactNode,
    image: any,
    title: string,
    price: number
}

export function ProductPopup({ active, setActive, image, title, price, children }: Props) {

    const { productCount, setProductCount } = useContextValue();

    const click = () => {
        setProductCount(productCount + 1)
        setActive(false)
    }

    const isPopupActive = classNames(styles.popup, {
        [styles.active]: active
    });

    const isContentActive = classNames(styles.content, {
        [styles.active]: active
    });

    const isBlurActive = classNames(styles.blur, {
        [styles.active]: active
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

    return (
        <div className={isPopupActive} onClick={() => setActive(false)}>
            <div className={isBlurActive}></div>
            <div className={isContentActive} onClick={e => e.stopPropagation()}> {/* preventing any parent event handlers from being executed */}
                <div className={styles.swipeBar}></div>
                <div className={styles.layout}>
                    <Image
                        className={styles.image}
                        src={image}
                        alt="cheburek"
                        width={300}
                        height={328}
                    />

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
                        <div className={styles.supplementsContainer}>
                            {
                                supplements.map((obj) => <FoodSupplements key={obj.id} name={obj.title} price={obj.price} />)
                            }
                        </div>

                    </div>
                </div>



                <Button style={styles.button} onClick={click}>{"Додати: " + price + "₴"}</Button>
            </div>
        </div>
    )
}    
