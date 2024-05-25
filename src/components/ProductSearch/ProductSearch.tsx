import Image from "next/image"
import loupeIcon from "../../../public/icons/loupe.svg"
import styles from "./productSearch.module.scss"

export function ProductSearch(params: any) {

    return (
        <div className={styles.searchWrapper}>
            <div className={styles.searchBlock}>
                <Image src={loupeIcon} width={20} height={20} alt="loupeIcon" />
                <input className={styles.input} type="text" placeholder="Шукати" />
            </div>
        </div>
    )

}