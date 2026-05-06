import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import './Checkout.css'
import { NavLink } from "react-router-dom";

function Checkout() {
    const { cart } = useContext(CartContext);

    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        country: ''
    });
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("ORDER:", { cart, form });
    };

    return (
        <div className="checkout">
            <div className="checkout-left">
                <h2>Shipping info</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Full name"
                        onChange={handleChange}
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                    <input
                        name="address"
                        placeholder="Address"
                        onChange={handleChange}
                    />
                    <input
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                    />
                    <input
                        name="postalCode"
                        placeholder="Postal code"
                        onChange={handleChange}
                    />
                    <input
                        name="country"
                        placeholder="Country"
                        onChange={handleChange}
                    />
                    <p>Total: ${total.toFixed(2)}</p>
                    <button type="submit">Pay now</button>
                </form>
            </div>

            <div className="checkout-right">
                <h3>Order summary</h3>

                {cart.map(item => {
                    const imageSrc = item.images?.[0] || item.thumbnail || '';
                    return (
                        <div key={item.id} className="checkout-item">
                            <img src={imageSrc} alt={item.title} style={{ width: '50px', marginRight: '10px' }} />  {item.title} x {item.quantity} x ${item.price.toFixed(2)} = ${(item.price * item.quantity).toFixed(2)}
                        </div>

                    );
                })}
                <div>
                    <h2>Total : ${total.toFixed(2)}</h2>
                </div>

            </div>
        </div>
    );
}

export default Checkout;