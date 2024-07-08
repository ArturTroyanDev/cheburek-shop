// 'use client'
import React from 'react';
import styles from './Button.module.scss'
// import { useContextValue } from '../../context/ContextValue';
import classNames from 'classnames';
type Props = {
    // id: any,
    // className: any,
    onClick?: () => void,
    children?: React.ReactNode
    style?: any,
}



export function Button({ onClick, children, style }: Props) {
    const isStylesSet = classNames(styles.button, {
        [style]: style
    });

    const [width, setWidth] = React.useState<number>(0);


    return (
        <button className={isStylesSet} onClick={onClick}>{children}</button>
    )
}

