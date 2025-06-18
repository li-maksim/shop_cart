import { Link } from 'react-router-dom'
import styles from '../styles/HomePage.module.css'
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate()

    return (
        <div className={styles.homepage}>
            <div className={styles.content}>
                <h1 className={`h1, ${styles.h1}`}>Welcome to Top Shelf! <br />Your Home for Cutting-Edge Electronics</h1>
                <p className={styles.p}>With trusted brands, competitive prices, and expert customer support, Top Shelf is your one-stop shop for all things tech. From the everyday essentials to the latest innovations, we’re here to keep you connected and ahead of the curve.</p>
                <p><b>Why choose us?</b></p>
                <ul>
                    <li>Free shipping on orders over $200</li>
                    <li>24/7 customer service</li>
                    <li>Easy returns and warranties</li>
                    <li>Secure checkout & multiple payment options</li>
                </ul>
                <p className={styles.p}>Ready to power up? Explore our collection and experience electronics the smart way.</p>
                <button className={`btn, ${styles.btn}`} onClick={() => navigate('/store')}>
                    Start Shopping
                </button>
            </div>
        </div>
    )
}

export default HomePage