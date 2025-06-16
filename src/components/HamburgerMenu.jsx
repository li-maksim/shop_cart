import { Link } from 'react-router-dom'
import styles from '../styles/HamburgerMenu.module.css'

function HamburgerMenu({ status, fn }) {

    return (
        <div className={status ? styles.open : styles.closed} onClick={fn}>
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contacts</Link>
        </div>
    )
}

export default HamburgerMenu