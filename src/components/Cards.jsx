import { useState, useEffect } from "react"

function Cards() {

    // const cards = data.map((item) => {
    //     <div className="card">
    //         <img src={item.image} alt="" />
    //         <h3>{item.title}</h3>
    //         <p>{item.description}</p>
    //     </div>
    // })

    const [data, setData] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/10')
        .then(response => {
            if (response.status >= 400) {
                throw new Error('Server error')
            }
            return response.json()
        })
        .then(response => setData(response))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>A network error was encountered</p>

    return (
        <div className="cards">
            <div>
                <img src={data.image} alt="" />
                <h3>{data.title}</h3>
            </div>
        </div>
    )
}

export default Cards