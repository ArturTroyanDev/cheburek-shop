import styles from "./ProductPopup.module.scss"

export function ProductPopup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                <button className={styles.closeBtn} onClick={() => props.setTrigger(false)}> Готово</button>
                {props.children}
            </div>
        </div>
    ) : "";
}