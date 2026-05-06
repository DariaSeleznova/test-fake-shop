import './Header.css'
import { NavLink } from 'react-router-dom'
import { TiHomeOutline, TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../Context/CartContext.jsx';
import { useContext } from 'react';
import Contact from '../../Pages/Contact/Contact.jsx';

function Header() {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className='header'>
            <div className='logo'>
                <h1>Fake Store</h1>
            </div>

            <div className='client__panel'>
                <NavLink to="/" className="home-icon"> <TiHomeOutline /> Home</NavLink>
                <NavLink to="/cart" className="cart-icon">
                    <TiShoppingCart />
                    {totalItems > 0 && <span className="cart-badge">{totalItems > 99 ? '99+' : totalItems}</span>}
                </NavLink>
                <NavLink to="/contact" className="contact-link">Contact</NavLink>
            </div>
        </header>
    )
}

export default Header
