import { Link } from 'react-router-dom'
import styles from '../styles/HomePage.module.css'
import imgLaptop from '../assets/laptop.jpg'
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate()

    return (
        <div className={styles.homepage}>
            <div>
                <h1 className={`h1, ${styles.h1}`}>Home Page</h1>
                <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, aliquam sint! Voluptates facere provident saepe ratione tempora vel quae! Odit veritatis quas totam doloremque quisquam numquam at nulla nostrum molestias.</p>
                <button className={`btn, ${styles.btn}`} onClick={() => navigate('/store')}>
                    Start Shopping
                </button>
            </div>
            <div>
                <img src={imgLaptop} alt="Laptop photo" className={styles.img} />
            </div>
        </div>
    )
}

export default HomePage