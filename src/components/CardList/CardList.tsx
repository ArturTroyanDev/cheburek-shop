"use client"
import { Pagination } from '../Pagination/Pagination';
import styles from './CardList.module.scss'
// import { store } from '../utils/redux/store's



type containerProps = {
    children?: React.ReactNode; // React.ReactNode represents a React element, an array of React elements, or a string, number, or boolean.
};

// import { useContextValue } from "@/context/ContextValue";


export function CardList(props: containerProps) {



    return (
        <div className={styles.wrapper}>
            <div className={styles.list}>
                {props.children}
            </div>
            <Pagination />
        </div>
    )

}