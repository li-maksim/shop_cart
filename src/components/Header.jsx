import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.css'
import logoImg from '../assets/logo.png'
import { HiOutlineShoppingBag } from "react-icons/hi";

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
                <Link to="/contact" className={`link ${styles.link}`}>Contact</Link>
            </nav>
            <div className={styles.cart}>
                <Link to="/checkout" className={`link ${styles.link}`}>
                    <HiOutlineShoppingBag className="icon"/>
                </Link>
                <p className={styles.cart_num}>{totalAmount}</p>
            </div>
        </header>
    )
}

export default Header