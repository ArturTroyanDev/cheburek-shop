import styles from './foodSuplements.module.scss'


type containerProps = {
    name?: string,
    price?: number,

};

export function FoodSupplements({ name, price }: containerProps) {
    return (
        <div className={styles.layout}>
            <div className={styles.block}>
                <label className={styles.container}>
                    {name}
                    <input className={styles.checkbox} type="checkbox" id="horns" name="horns" />
                    <span className={styles.checkmark}></span>
                </label>
            </div>

            <div className={styles.price}>{"+" + price + "₴"}</div>
        </div>
    )

}