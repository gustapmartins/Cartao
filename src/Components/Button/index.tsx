import { IButton } from "../../Types/IButton";
import styles from './button.module.scss'

export default function Button({ children, onClick, type = "button" }: IButton) {
    return (
        <button
            className={styles.Button}
            type={type}
            onClick={onClick}>
                {children}
        </button>
    )
}
