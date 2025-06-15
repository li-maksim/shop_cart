import CartIcon from './CartIcon.jsx'
import styles from '../Header.module.css'

function HamburgerHeader({ totalAmount }) {

    return(
        <header>
            <div className={styles.ham_icon}>
                <span className={styles.ham_bar}></span>
                <span className={styles.ham_bar}></span>
                <span className={styles.ham_bar}></span>
            </div>
            <CartIcon totalAmount={totalAmount} />
        </header>
    )
}

export default HamburgerHeader