"use client"
import styles from "./page.module.scss"
import { useSelector } from 'react-redux';
import type { RootState  } from '../../components/utils/redux/store';



export default function ShoppingCart() {
    const productCount = useSelector((state: RootState) => state.counter.productCount)
    
  
    return (
        <div className={styles.container}>
            <span className={styles.wrapper}>
                <h2 className={styles.title}>Кошик</h2>
                <p className={styles.counter}>{productCount}</p>
            </span>
        </div>
    )
}