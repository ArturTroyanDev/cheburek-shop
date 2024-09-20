"use client"
import styles from "./page.module.scss"
import { useSelector } from 'react-redux';
import type { RootState } from '../../components/utils/redux/store';
import CartItem from '../../components/CartItem/CartItem'
import { MapCartItems } from "@/components/CartItem/MapCartItem";
import { CardList } from "@/components/CardList/CardList";
import { useAppSelector } from "@/redux/hooks";


export default function ShoppingCart() {
    const { totalCount } = useAppSelector((state) => state.shoppingCart)

    // console.log(totalCount)

    // const store = useAppStore()
    // const initialized = useRef(false)


    return (
        <div className={styles.container}>
            <span className={styles.wrapper}>
                <h2 className={styles.title}>Кошик</h2>
                <p className={styles.counter}>{totalCount}</p>
            </span>
            <CardList>
                <MapCartItems />
            </CardList>
        </div>
    )
}