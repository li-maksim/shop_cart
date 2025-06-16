import CartIcon from './CartIcon.jsx'
import styles from '../styles/Header.module.css'
import { useState } from 'react'
import HamburgerMenu from './HamburgerMenu.jsx'

function HamburgerHeader({ totalAmount }) {

    const [isOpen, setIsOpen] = useState(false)

    function toggle() {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    return(
        <>
        <header className={styles.ham_header}>
            <div className={styles.ham_icon} onClick={() => toggle()}>
            <span className={styles.ham_bar}></span>
            <span className={styles.ham_bar}></span>
            <span className={styles.ham_bar}></span>
            </div>
            <CartIcon totalAmount={totalAmount} />
        </header>
        <HamburgerMenu status={isOpen} fn={toggle} />
        </>
    )
}

export default HamburgerHeader