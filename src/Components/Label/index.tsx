import styles from './Label.module.scss'
import { ILabel } from '../../Types/ILabel'

export default function Label({children, htmlFor}: ILabel) {
  return (
    <label htmlFor={htmlFor} className={styles.Label}>
        {children}
    </label>
  )
}
