import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'
import logoImg from '../assets/logo.png'
import CartIcon from './CartIcon.jsx'

function Header({totalAmount = 0}) {

    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/" className={'link'}>
                    <img src={logoImg} alt="Company logo" className={styles.logo_img}/>
                </Link>
                <p className={styles.logo_p}>Top Shelf</p>
            </div>
            <nav className={styles.links}>
                <Link to="/" className={`link ${styles.link}`}>Home</Link>
                <Link to="/store" className={`link ${styles.link}`}>Store</Link>
                <Link to="/contact" className={`link ${styles.link}`}>Contacts</Link>
            </nav>
            <CartIcon totalAmount={totalAmount} />
        </header>
    )
}

export default Header