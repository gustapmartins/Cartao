import {Input} from '../../Types/Input'
import styles from './Input.module.scss'

export default function InputText({placeholder, type, onChange, id, name, maxlength, minlength}: Input) {
  return (
    <input 
        id={id}
        name={name}
        className={styles.Input}
        type={type}
        placeholder={placeholder} 
        onChange={onChange}
        maxLength={maxlength}
        minLength={minlength}
        />
  )
}
