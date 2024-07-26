import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log(cart)
    const [cartCount, setCartCount] = useState(0)

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const addToCart = (product) => {
        if (!isInCart(product.id)) {
            setCart(prev => [...prev, product])
        } else {
            
        }
    }

    const total = () => {
        let acc = 0
        cart.forEach(prod => {
            acc += prod.quantity
        })
        return acc
    }

    const totalQuantity = total()

    const obj = { cart, isInCart, addToCart, totalQuantity }

    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider >
    )
}