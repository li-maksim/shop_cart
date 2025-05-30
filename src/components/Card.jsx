import { useState } from 'react'
import styles from '../styles/Card.module.css'
import Input from './Input'
import { HiStar } from 'react-icons/hi'

function Card({product, fn}) {

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

    const [order, setOrder] = useState({id: product.id, amount: 1})
    
    function stars() {
        const rate = []
        for (let i = 0; i < 5; i++) {
            if (i < Math.round(product.rating.rate)) {
                rate.push(true)
            }  else {
                rate.push(false)
            }
        }

        return (
            <div className={styles.stars}>
                {rate.map((item, index) => {
                    if (item === true) {
                        return <HiStar className={styles.gold_icon} key={index} />
                    } else {
                        return <HiStar className="icon" key={index} />
                    }
                })}
            </div>
        )
    }

    return (
        <div className={styles.card}>
                <img src={product.image} alt="" className={styles.img}/>
                <div className={styles.title_wrapper}>
                    <h3 className={styles.title}>{product.title}</h3>
                    <span className={styles.tooltip}>{product.title}</span>
                </div>
                <div className={styles.rating}>
                    <p>
                        Rating: {Math.round(product.rating.rate)}
                    </p>
                    {stars()}
                </div>
                <p className={styles.price}>${product.price}</p>
                <div className={styles.amount_btns}>
                    <button className={styles.btn} onClick={amountFns.decrease}>-</button>
                    <Input amount={amount} fn={amountFns.inputFn}></Input>
                    <button className={styles.btn} onClick={amountFns.increase}>+</button>
                </div>
                <button className={styles.add_btn} onClick={() => {fn(order)}}>Add to Cart</button>
        </div>
    )
}

export default Card