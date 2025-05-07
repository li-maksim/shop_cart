import { useState, useEffect } from "react"
import Cards from "./Cards.jsx"

// const useFakeStoreAPI = () => {
//     const [data, setData] = useState([])
//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products/10', {mode: 'cors'})
//             .then((response) => {
//                 if (response.status >= 400) {
//                     throw new Error('Server error')
//                 }
//                 return response.json
//             })
//             .then((response) => setData([...data, response]))
//             .catch((error) => setError(error))
//             .finally(() => setLoading(false))
//     })

//     return {data, error, loading}
// }


function StorePage() {

    // const {data, error, loading} = useFakeStoreAPI()
    
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>A network error was encountered</p>;

    return (
        <>
            <h1>Store</h1>
            <Cards></Cards>
        </>
    )
}

export default StorePage