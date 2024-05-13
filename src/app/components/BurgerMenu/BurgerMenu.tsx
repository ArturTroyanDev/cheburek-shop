import styles from './burgerMenu.module.scss'


export function BurgerMenu(params: any) {

    return (
        <button className={styles.burger} id="burger">
            <span></span><span></span><span></span>
        </button>
    )

}