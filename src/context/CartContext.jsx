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
        } else if (isInCart(product.id)) {
            /*let acc = product.quantity
            setCart(prev => [...prev, product])
            cart.reduce(acc, product => acc + product.quantity)*/
        }
    }

    const gettotalQuantity = () => {
        let acc = 0
        cart.forEach(prod => {
            acc += prod.quantity
        })
        return acc
    }

    const totalQuantity = gettotalQuantity()

    const totalValue = () =>{
        let acc = 0
        cart.forEach((el) =>{
            acc+= el.quantity * el.price
        })
        return acc
    }

    const cartHasItems = () => {
        if (cart.length !== 0) {
            return true
        } else if (cart.length === 0) {
            return false
        }
    }

    const clearCart= () => {
        setCart([])
    }

    const removeItem = (id) =>{
        const cartUpdated = cart.filter((prod) => prod.id !== id)
        setCart(cartUpdated)
    }

    const obj = { cart, isInCart, addToCart, totalQuantity, cartHasItems, totalValue, clearCart, removeItem }

    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider >
    )
}