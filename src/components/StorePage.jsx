import { useState, useEffect } from 'react'
import Card from './Card.jsx'
import { useOutletContext, Link } from 'react-router-dom'
import styles from '../styles/StorePage.module.css'
import { useNavigate } from 'react-router-dom'

function StorePage() {

    const navigate = useNavigate()
    const addToCart = useOutletContext().addToCart

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productIds = [10, 11, 12, 13, 14];

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

    const cards = data.map((item) => {
        return <Card product={item} key={item.id} fn={addToCart}></Card>
    })
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <div className={styles.main}>
            <h1>Store</h1>
            <div className={styles.cards}> 
                {cards}
            </div>
            <button className={styles.btn} onClick={() => navigate('/checkout')}>Go to Checkout</button>
        </div>
    )
}

export default StorePage