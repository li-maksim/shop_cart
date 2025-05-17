import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

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

    const cards = data.map((item) => {
        return <h2>{item.title}</h2>
    })

    return (
        <>
            <h1>Checkout</h1>
            <div>
                {cards}
            </div>
        </>
    )
}

export default CheckoutPage