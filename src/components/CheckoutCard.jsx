import Input from './Input.jsx'
import { useState } from 'react'
import styles from '../styles/CheckoutCard.module.css'
import { HiOutlineTrash } from 'react-icons/hi'

function CheckoutCard({product, amount, fns, delFn}) {
    
    const [rawInput, setRawInput] = useState(amount)

    const change = (() => {

        function increase() {
            if (rawInput < 100) {
            fns(product.id, amount + 1)
            setRawInput(amount + 1)
            }
        }

        function decrease() {
            if (amount <= 1) {
                delFn(product.id)
            } else {
                fns(product.id, amount - 1)
                setRawInput(amount - 1)
            }
        }

        function inputFn() {
            if (rawInput > 0 && rawInput <= 100) {
                fns(product.id, parseInt(rawInput))
            } else {
                setRawInput(amount)
            }
        }

        return {increase, decrease, inputFn}
    })()

    function handleChange(num) {
        setRawInput(num)
    }

    if (amount) return( 
        <div className={styles.card}>
            <div className={styles.img_wrapper}>
                <img className={styles.img} src={product.image} alt="" />
            </div>
            <h3 className={styles.title}>{product.title}</h3>
            <div className={styles.price_wrapper}>
                <div className={styles.btns}>
                    <button className={styles.btn} data-testid="del_btn" onClick={() => delFn(product.id)}>
                        <HiOutlineTrash />
                    </button>
                    <button className={styles.btn} onClick={change.decrease} >-</button>
                    <Input val={rawInput} fn={handleChange} blur={change.inputFn}></Input>
                    <button className={styles.btn} onClick={change.increase} >+</button>
                </div>
                <p>${Math.round(product.price * amount * 100) / 100}</p>
            </div>
        </div>
    )
}

export default CheckoutCard