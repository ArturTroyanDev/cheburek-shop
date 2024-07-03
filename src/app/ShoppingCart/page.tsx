"use client"
import { useContextValue } from "@/context/ContextValue"
import styles from "./page.module.scss"

export default function ShoppingCart() {
    const { productCount } = useContextValue()

    return (
        <div className={styles.container}>
            <span className={styles.wrapper}>
                <h2 className={styles.title}>Кошик</h2>
                <p className={styles.counter}>{productCount}</p>
            </span>
        </div>
    )
}