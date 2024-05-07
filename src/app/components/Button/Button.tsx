import styles from './Button.module.scss'

type propsType = {
    text?: string;
}

export function Button({ text = 'Додати в кошик' }: propsType) {
    
    return (

        <button className={styles.button}>
            {text}
        </button>

    );
} 