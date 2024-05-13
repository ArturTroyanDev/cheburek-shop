import Image from "next/image"
import styles from "./sidebar.module.scss"
import cheburek from "../../../../public/foodIcons/cheburek.svg"
import { ProductSearch } from "../ProductSearch/ProductSearch"



export function Sidebar(params: any) {

    return (
        <div className={styles.sidebar}>
            <ProductSearch />

            <ul className={styles.categories}>
                <li className={styles.item}>
                    <Image src={cheburek} alt="cheburek" />
                    <span className={styles.title}>Чебуреки</span>
                </li>
                <li className={styles.item}>
                    <Image src={cheburek} alt="cheburek" />
                    <span className={styles.title}>Чебуреки</span>
                </li>
                <li className={styles.item}>
                    <Image src={cheburek} alt="cheburek" />
                    <span className={styles.title}>Чебуреки</span>
                </li>
                <li className={styles.item}>
                    <Image src={cheburek} alt="cheburek" />
                    <span className={styles.title}>Чебуреки</span>
                </li>
                <li className={styles.item}>
                    <Image src={cheburek} alt="cheburek" />
                    <span className={styles.title}>Чебуреки</span>
                </li>
            </ul>
        </div>
    )

}