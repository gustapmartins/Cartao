import { useState } from 'react'
import { ICart } from '../../Types/ICart'
import styles from './Cart.module.scss'

export default function Cart({ changes }: ICart) {

  const numberCartSubtring = changes.numberCart.substring(0, 4) + ' ' + changes.numberCart.substring(4, 8) + ' ' + changes.numberCart.substring(8, 12) + ' ' + changes.numberCart.substring(12, 16)

  const [active, setActive] = useState(false)

  const handleCart = () => {
    setTimeout(() => {
      setActive(!active)
    }, 400)
  }

  return (
    <section
      className={styles.Container} onClick={handleCart}>
      {active ?
        <div className={styles.Container__Box}>
          <div className={styles.Container__Box__Logo}>
            <img src="https://www.mobills.com.br/blog/wp-content/uploads/2022/06/Visa-LOGO-Brandmark-White_RGB.png" />
          </div>
          <div className={styles.Container__Box__Info}>
            <span> {changes.numberCart === '' ? '1234 4321 5432 1293' : numberCartSubtring} </span>
            <div className={styles.Container__Box__Info__Infos}>
              <div className={styles.Container__Box__Info__Infos__Validation}>
                <span>Nome</span>
                <h3> {changes.nameUser || 'Nome do cartão'}  </h3>
              </div>
              <div className={styles.Container__Box__Info__Infos__Validation}>
                <span>Vencimento</span>
                <h3>{changes.Valid === '' ? "04/23" : changes.Valid.substring(0, 2) + "/" + changes.Valid.substring(2, 4)} </h3>
              </div>
            </div>
          </div>
        </div> :
        <div className={styles.Back}>
          <div className={styles.Back__Bar}></div>
          <div className={styles.Back__Barlist}>
            <div className={styles.Back__Barlist__CVV}></div>
            <span> {changes.CVV || "0934"} </span>
          </div>
        </div>
      }
    </section>
  )
}
