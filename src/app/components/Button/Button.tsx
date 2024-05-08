'use client'
import { useState } from 'react';
import styles from './Button.module.scss'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';

type propsType = {
    text?: string;
};

export function Button({text = 'Додати в кошик' }: propsType) {
    const [state, setState] = useState(0);

    const countAdd = () => {
        setState(state + 1)
    }

    return (
        
        <button onClick={countAdd} className={styles.button}>
            {state}
        </button>
    );
} 