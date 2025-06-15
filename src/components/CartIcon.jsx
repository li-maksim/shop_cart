import styles from '../styles/Header.module.css'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from 'react-icons/hi'

function CartIcon({ totalAmount }) {

    return(
        <div className={styles.cart}>
        <Link to="/checkout" className={`link ${styles.link}`}>
            <HiOutlineShoppingBag className="icon"/>
        </Link>
        <span data-testid="totalAmount" className={styles.cart_num}>{totalAmount}</span>
    </div>
    )
}

export default CartIcon