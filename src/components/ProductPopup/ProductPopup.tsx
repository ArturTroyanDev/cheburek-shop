import styles from "./ProductPopup.module.scss"
import React from "react";
import classNames from 'classnames';


type Props = {
    active: boolean,
    setActive: any,
    children?: React.ReactNode,
    image?: any,
    title?: string,
}

export function ProductPopup({ active, setActive, image, title, children }: Props) {

    const isPopupActive = classNames(styles.popup, {
        [styles.active]: active
    });

    const isContentActive = classNames(styles.content, {
        [styles.active]: active
    });

    return (
        <div className={isPopupActive} onClick={() => setActive(false)}>
            <div className={isContentActive} onClick={e => e.stopPropagation()}> {/* preventing any parent event handlers from being executed */}
            {/* <Image
                className={styles.img}
                blurDataURL='none'
                src={image}
                alt="cheburek"
                width={428}
                height={380}
                placeholder="blur"
            /> */}
            </div>
        </div>
    )
}    
