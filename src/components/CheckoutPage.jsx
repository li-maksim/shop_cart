import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import CheckoutCard from './CheckoutCard.jsx'
import styles from '../styles/CheckoutPage.module.css'
import { keyboard } from '@testing-library/user-event/dist/cjs/keyboard/index.js'

function CheckoutPage() {

    const products = useOutletContext().products
    const productIds = []
    products.forEach((item) => {
        productIds.push(item.id)
    })

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        Promise.all(
            productIds.map(id =>
                fetch(`https://fakestoreapi.com/products/${id}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Failed to fetch product with ID ${id}`);
                        }
                        return response.json();
                    })
            )
        )
        .then(setData)
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    }, []);

    const cards = data.map((item, index) => {
        return <CheckoutCard product={item} amount={products[index].amount } key={index} />
    })



    return (
        <div className={styles.checkout_page}>
            <h1>Checkout</h1>
            <div>
                {loading && <p>Loading...</p>}
                {error && <p>A network error was encountered</p>}
                {products.length
                ? cards
                : <p>Your cart is empty</p>
                }
            </div>
            <div className="total">
                
            </div>
            {products.length > 0 && <button className={styles.btn}>Purchase</button>}
        </div>
    )
}

export default CheckoutPage