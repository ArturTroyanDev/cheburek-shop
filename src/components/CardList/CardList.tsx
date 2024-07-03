import styles from './CardList.module.scss'

type containerProps = {
    children?: React.ReactNode; // React.ReactNode represents a React element, an array of React elements, or a string, number, or boolean.
};


// import { useContextValue } from "@/context/ContextValue";


export function CardList(props: containerProps) {



    return (
        <div className={styles.list}>
            {props.children}
        </div>
    )

}