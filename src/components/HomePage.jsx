import { Link } from "react-router-dom"

function HomePage() {

    return (
        <>
            <h1>Home Page</h1>
            <Link to="/store" data-testid="store_link">Store</Link>
        </>
    )
}

export default HomePage