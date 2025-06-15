import { Link } from 'react-router-dom'

function HamburgerMenu() {

    return (
        <div className="ham_menu">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contacts</Link>
        </div>
    )
}

export default HamburgerMenu