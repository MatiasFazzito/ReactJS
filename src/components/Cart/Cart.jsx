import { useCart } from "../../hooks/CartHook"
import { useNotification } from "../../hooks/NotificationHook"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, totalValue, clearCart } = useCart()
    const { setNotification } = useNotification()
    const total = totalValue()

    const handleClear = (cart) => {
        clearCart(cart)
        setNotification("danger", `Se limpio el carrito`)
    }

    return (
        <>
            <ul className="list-group list-group-flush">
                {cart.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </ul>
            <h3 className="cartTotal">Valor total del pedido: ${total}</h3>
            <div className="cartFunction">
                <Link className="cartBuy" to="/cart/checkout"><button >Finalizar compra</button></Link>
                <button className="cartErase" onClick={() => handleClear(cart)} >Limpiar carrito</button>
            </div>
        </>
    )
}

export default Cart