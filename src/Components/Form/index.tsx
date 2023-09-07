import React, { useState } from 'react'
import Button from '../Button'
import Cart from '../Cart'
import InputText from '../InputText'
import Label from '../Label'
import styles from './Form.module.scss'

export default function Form() {

    const [changes, setChanges] = useState({
        numberCart: '',
        nameUser: '',
        Valid: '',
        CVV: ''
    })

    const handleOnChanges = (e: any) => {
        setChanges({ ...changes, [e.target.name]: e.target.value })
    }

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className={styles.Container}>
            <Cart changes={changes} setChanges={setChanges}  />
            <form className={styles.Container__Form} onClick={handleClick}>
                <div className={styles.InputsName}>
                    <Label htmlFor='numberCart'>Número do cartão</Label>
                    <InputText
                        id='numberCart'
                        maxlength={16}
                        type="text"
                        name="numberCart"
                        placeholder='1231 2312 3123 1231'
                        onChange={handleOnChanges} />
                </div>
                <div className={styles.InputsName}>
                    <Label htmlFor='nameUser'>Nome como aparece no cartão</Label>
                    <InputText 
                        id='nameUser' 
                        type="text" 
                        name="nameUser" 
                        placeholder='Cartão teste' 
                        maxlength={22}
                        onChange={handleOnChanges} />
                </div>
                <div className={styles.InputsInfo}>
                    <div className={styles.InputsInfo__Inputs}>
                        <Label htmlFor='Valid'>Validade</Label>
                        <InputText 
                        id='Valid' 
                        type='text' 
                        name='Valid' 
                        maxlength={4}
                        placeholder='04/23' 
                        onChange={handleOnChanges} />
                    </div>
                    <div className={styles.InputsInfo__Inputs}>
                        <Label htmlFor='CVV'>CVV</Label>
                        <InputText 
                        id='CVV' 
                        type="text" 
                        name='CVV' 
                        maxlength={4}
                        placeholder='0000' 
                        onChange={handleOnChanges} />
                    </div>
                </div>
                <Button type='submit'>Enviar</Button>
            </form>
        </div>
    )
}
