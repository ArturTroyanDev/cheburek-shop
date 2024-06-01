import styles from "./ProductPopup.module.scss"
import React from "react";
import Image from "next/image";
import classNames from 'classnames';
import { Button } from "../Button/Button";


type Props = {
    active: boolean,
    setActive: any,
    children?: React.ReactNode,
    image: any,
    title: string,
    price: number
}

export function ProductPopup({ active, setActive, image, title, price, children }: Props) {

    const isPopupActive = classNames(styles.popup, {
        [styles.active]: active
    });

    const isContentActive = classNames(styles.content, {
        [styles.active]: active
    });

    return (
        <div className={isPopupActive} onClick={() => setActive(false)}>
            <div className={isContentActive} onClick={e => e.stopPropagation()}> {/* preventing any parent event handlers from being executed */}
                <div className={styles.swipeBar}></div>
                <div className={styles.layout}>
                    <Image
                        className={styles.image}
                        src={image}
                        alt="cheburek"
                        width={300}
                        height={240}
                        placeholder="blur"
                    />
                    <div className={styles.info}>
                        <h4 className={styles.title}>
                            {title}
                        </h4>
                        <div className={styles.price}>
                            {price + "₴"}
                        </div>
                    </div>
                </div>
                <Button text={"Додати: " + price + "₴"} style={styles.button} />
            </div>
        </div>
    )
}    
