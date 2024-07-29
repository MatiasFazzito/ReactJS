import { createContext, useState } from "react"
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

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

    const cartHasItems = () => {
        if (cart.length !== 0) {
            return true
        } else if (cart.length === 0) {
            return false
        }
    }

    const obj = { cart, isInCart, addToCart, totalQuantity, cartHasItems }

    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider >
    )
}