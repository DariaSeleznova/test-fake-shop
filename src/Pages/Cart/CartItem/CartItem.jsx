import { CartProvider, CartContext } from "../../../Context/CartContext.jsx";
import { useContext } from "react";
import './CartItem.css'

function CartItem({ item }) {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const imageSrc = item.images?.[0] || item.thumbnail || ''



    return (
        <div className="cart-item">
            <img src={imageSrc} alt={item.title} />
            <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <p className="quantity">Quantity: {item.quantity}</p>
            </div>
            <div className="cart-item-actions">
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>
    );
}

export default CartItem;