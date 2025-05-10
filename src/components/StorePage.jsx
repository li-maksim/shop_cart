import { useState, useEffect } from "react"
import Card from "./Card.jsx"


function StorePage() {

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
                            throw new Error(`Failed to fetch product ${id}`);
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
        return <Card product={item} key={item.id}></Card>
    })
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
            <h1>Store</h1>
            <div className="cards"> 
                {cards}
            </div>
        </>
    )
}

export default StorePage