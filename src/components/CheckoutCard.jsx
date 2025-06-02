import Input from './Input.jsx'
import styles from '../styles/CheckoutCard.module.css'

function CheckoutCard({product, amount}) {
    
    return( 
        <div className={styles.card}>
            <img className={styles.img} src={product.image} alt="" />
            <h3>{product.title}</h3>
            <div className={styles.price_wrapper}>
                <p>x{amount}</p>
                <p>${product.price * amount}</p>
                <div className="btns">
                    {/* <button className={styles.btn} onClick={amountFns.decrease}>-</button>
                    <Input val={amount} fn={amountFns.inputFn}></Input>
                    <button className={styles.btn} onClick={amountFns.increase}>+</button> */}
                </div>
            </div>
        </div>
    )
}

export default CheckoutCard