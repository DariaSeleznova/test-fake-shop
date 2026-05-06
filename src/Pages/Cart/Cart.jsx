import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import './Cart.css'
import CartItem from "./CartItem/CartItem.jsx";
import { NavLink } from "react-router-dom";

function Cart() {
    const { cart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
    return (
        <div className="cart">
            <div className="cart-left">
                <h2>Cart</h2>

                {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>

            <div className="cart-right">
                <h3>Summary</h3>
                <p>Total: ${totalPrice.toFixed(2)}</p>

                <NavLink to="/checkout" className="checkout-btn">Proceed to Checkout</NavLink>
                <NavLink to="/" className="continue-btn">Continue Shopping</NavLink>
            </div>
        </div>
    );
}

export default Cart;