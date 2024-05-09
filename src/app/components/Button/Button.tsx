'use client'
import React from 'react';
import styles from './Button.module.scss'
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';
import { AppContext } from '../../page';

type propsType = {
    text?: string;
};

export function Button({text = 'Додати в кошик' }: propsType) {
    const {state, setState} = React.useContext(AppContext)


    return (
        
        <button onClick={() => setState(state + 1)} className={styles.button}>
            {state}
        </button>
    );
} 