import styles from "./ProductPopup.module.scss"
import React from "react";
import classNames from 'classnames';


type Props = {
    active: boolean;
    setActive: any;
    children: React.ReactNode;
}

export function ProductPopup({ active, setActive, children }: Props) {

    const isPopupActive = classNames(styles.popup, {
        [styles.active]: active
    });

    const isPopupInnerActive = classNames(styles.popupInner, {
        [styles.active]: active
    });

    return (
        <div className={isPopupActive} onClick={() => setActive(false)}>
            <div className={isPopupInnerActive} onClick={e => e.stopPropagation()}> {/* preventing any parent event handlers from being executed */}
                {children}
            </div>
        </div>
    )
}    
