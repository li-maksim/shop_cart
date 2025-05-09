import { useState, useEffect } from "react"
import Card from "./Card.jsx"


function StorePage() {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const newData = []

        fetch('https://fakestoreapi.com/products/10')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('Server error')
                }
                return response.json()
            })
            .then((response) => {
                newData.push(response)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))

        fetch('https://fakestoreapi.com/products/11')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('Server error')
                }
                return response.json()
            })
            .then((response) => {
                newData.push(response)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))

        fetch('https://fakestoreapi.com/products/12')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error('Server error')
                }
                return response.json()
            })
            .then((response) => {
                newData.push(response)
                setData(newData)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [])

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