import { useState } from 'react'
import styles from '../styles/Card.module.css'
import Input from './Input'

function Card({product}) {

    const [amount, setAmount] = useState(1)
    const  amountFns = (() => {

        function inputFn(num) {
            if (num >= 0 && num < 100) {
                setAmount(parseInt(num))
            }
        }
        function increase() {
            if (amount < 99) {
                setAmount(amount + 1)
            }
        }
        function decrease() {
            if (amount > 1) {
                setAmount(amount - 1)
            }
        }

        return {inputFn, increase, decrease}
    })()

    return (
        <div className="card">
            <div>
                <img src={product.image} alt="" className={styles.img}/>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.descr}>{product.description}</p>
                <div className={styles.amount_btns}>
                    <button className={styles.btn} onClick={amountFns.decrease}>-</button>
                    <Input amount={amount} fn={amountFns.inputFn}></Input>
                    <button className={styles.btn} onClick={amountFns.increase}>+</button>
                </div>
                <button className={styles.btn}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card