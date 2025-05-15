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

    return (
        <>
            <h1>Checkout</h1>
            <div>
                {data[0].title && <h2>{data[0].title}</h2>}
            </div>
        </>
    )
}

export default CheckoutPage