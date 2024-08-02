"use client"
import styles from './DoubleButton.module.scss'
import { Button } from "../../ui/Button/Button";
import plus from "../../../../public/icons/plus.svg"
import minus from "../../../../public/icons/minus.svg"
import Image from 'next/image'


interface Props {
    onClickDecrease?: () => void,
    onClickIncrease?: () => void,
    count?: number,
}

export default function DoubleButton({ onClickDecrease, onClickIncrease, count }: Props) {

    return (
        <div className={styles.doubleButton}>
            <Button style={styles.btnMinus} onClick={onClickDecrease}>
                <Image
                    className={styles.imgMinus}
                    src={minus}
                    alt="-"
                />
            </Button>
            <div>у кошику {count}</div>
            <Button style={styles.btnPlus} onClick={onClickIncrease}>
                <Image
                    className={styles.imgPlus}
                    src={plus}
                    alt="+"
                />
            </Button>
        </div >
    )
}
