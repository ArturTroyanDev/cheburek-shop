"use client"
import styles from './DoubleButton.module.scss'
import { Button } from "../../ui/Button/Button";
import plus from "../../../../public/icons/plus.svg"
import minus from "../../../../public/icons/minus.svg"
import Image from 'next/image'
import classNames from 'classnames';
import { VariantProps, cva } from "class-variance-authority"
// import { FC } from 'react';


interface Props {
    onClickDecrease?: () => void,
    onClickIncrease?: () => void,
    count?: number,
    text?: string,
    secondaryAppearance?: boolean
}


const DoubleButton = ({ onClickDecrease, onClickIncrease, count, text, secondaryAppearance = false }: Props) => {

    const classNamesMap = (baseClass: string) =>
        classNames(styles[`${baseClass}_default`], {
            [styles[`${baseClass}_secondary`]]: secondaryAppearance
        });

    const wrapper = classNamesMap('wrapper');
    const btnMinus = classNamesMap('btnMinus');
    // const imgMinus = classNamesMap('imgMinus');
    const propsBlock = classNamesMap('propsBlock');
    const textStyle = classNamesMap('textStyle');
    const counterStyle = classNamesMap('counterStyle');
    const btnPlus = classNamesMap('btnPlus');
    // const imgPlus = classNamesMap('imgPlus');


    return (
        <div className={wrapper}>
            <Button className={btnMinus} onClick={onClickDecrease} />
            <div className={propsBlock}>
                {text ? <div className={textStyle}>{text}</div> : null}
                {count ? <div className={counterStyle}>{count}</div> : null}
            </div>
            <Button className={btnPlus} onClick={onClickIncrease} />
        </div >
    )
}

export { DoubleButton }