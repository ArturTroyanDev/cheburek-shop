"use client"
import styles from './DoubleButton.module.scss'
import { Button } from "../../ui/Button/Button";
import plus from "../../../../public/icons/plus.svg"
import minus from "../../../../public/icons/minus.svg"
import Image from 'next/image'


interface Props {
    onClickDecrease?: () => void,
    onClickIncrease?: () => void,
    children?: React.ReactNode
}

export default function DoubleButton({ children, onClickDecrease, onClickIncrease }: Props) {

    return (
        <div className={styles.doubleButton}>
            <Button style={styles.btnMinus} onClick={onClickDecrease}>
                <Image
                    className={styles.imgMinus}
                    src={minus}
                    alt="-"
                />
            </Button>
            {children}
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
