import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import CheckoutCard from './CheckoutCard.jsx'
import styles from '../styles/CheckoutPage.module.css'
import { keyboard } from '@testing-library/user-event/dist/cjs/keyboard/index.js'

function CheckoutPage() {

    const clearProducts = useOutletContext().clearProducts
    const changeAmount = useOutletContext().changeAmount
    const delFn = useOutletContext().delFromCart
    const products = useOutletContext().products

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        if (products.length === 0) {
            setData([])
            setLoading(false)
            return
        }
    
        setLoading(true)
        Promise.all(
            products.map(p =>
                fetch(`https://fakestoreapi.com/products/${p.id}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`Failed to fetch product with ID ${p.id}`);
                        }
                        return response.json();
                    })
            )
        )
        .then(setData)
        .catch(err => setError(err))
        .finally(() => setLoading(false))

    }, [products]);

    const cards = data.map((item, index) => {
        const prod = products.find(p => p.id === item.id)
        if (!prod) return null
        return <CheckoutCard product={item} amount={prod.amount} key={index} fns={changeAmount} delFn={delFn} />
    })

    let total = 0
    data.forEach((item) => {
        const prod = products.find(p => p.id === item.id)
        if (!prod) return null
        total = total + (item.price * prod.amount)
    })

    function handlePurchase() {
        clearProducts()
        alert('Thank you for you order! We will be in touch.')
    }

    return (
        <div className={styles.checkout_page}>
            <h1>Checkout</h1>
            <div className={styles.content}>
                <div className={styles.cards}>
                    {loading && <p>Loading...</p>}
                    {error && <p>A network error was encountered</p>}
                    {products.length
                    ? cards
                    : <p>Your cart is empty</p>
                    }
                </div>
                {products.length > 0 &&
                    <div className={styles.total}>
                    <h2>Total:</h2>
                    <p className={styles.price}><b>${Math.round(total * 100) / 100}</b></p>
                    {total > 200
                    ? <p>Shipping: FREE!</p>
                    : <p>Shipping: $30</p>}
                    <p>Discount: 0%</p>
                    <button className={styles.btn} onClick={() => handlePurchase()}>Purchase</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default CheckoutPage