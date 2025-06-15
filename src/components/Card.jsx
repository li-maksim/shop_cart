import { useState } from 'react'
import styles from '../styles/Card.module.css'
import Input from './Input.jsx'
import { HiStar } from 'react-icons/hi'

function Card({product, addFn, delFn, products}) {

    const [isInCart, setIsInCart] = useState(false)
    const [rawInput, setRawInput] = useState('1')
    const [amount, setAmount] = useState(1)

    const  amountFns = (() => {

        function inputFn() {
            if (rawInput > 0 && rawInput < 100) {
                setAmount(parseInt(rawInput))
                if (isInCart) setIsInCart(false)
            } else {
                setRawInput(amount)
            }
        }
        function increase() {
            if (amount < 99) {
                setAmount(amount + 1)
                setRawInput(amount + 1)
                if (isInCart) setIsInCart(false)
            }
        }
        function decrease() {
            if (amount > 1) {
                setAmount(amount - 1)
                setRawInput(amount - 1)
                if (isInCart) setIsInCart(false)
            }
        }

        return {inputFn, increase, decrease}
    })()
    
    function handleChange(num) {
        setRawInput(num)
        if (isInCart) setIsInCart(false)
    }
    
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

    function add() {
        addFn({id: product.id, amount: amount})
        setIsInCart(true)
    }
    function del() {
        delFn(product.id)
        setRawInput('1')
        setIsInCart(false)
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
                    <Input val={rawInput} fn={handleChange} blur={amountFns.inputFn}></Input>
                    <button className={styles.btn} onClick={amountFns.increase}>+</button>
                    {
                    isInCart
                    ? <button className={styles.del_btn} onClick={() => del()}>Delete</button>
                    : <button className={styles.add_btn} onClick={() => add()}>Add to Cart</button>
                }
                </div>
        </div>
    )
}

export default Card