import styles from '../styles/Footer.module.css'

function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
            © 2022 Top Shelf BC. All Rights Reserved. 
            </div>
            <div className={styles.links}>
                <a href="#" className='link'>Privacy Policy</a>
                <a href="#" className='link'>Terms & Conditions</a>
            </div>
        </footer>
    )
}

export default Footer