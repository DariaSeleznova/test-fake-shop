import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const removeFromCart = (id) => {
        console.log('Removing item with id:', id);
        setCart(prev => prev.filter(item => item.id !== id));
    };
    const increaseQuantity = (id) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const addToCart = (product) => {
        setCart(prev => {
            const exist = prev.find(item => item.id === product.id);

            if (exist) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
}