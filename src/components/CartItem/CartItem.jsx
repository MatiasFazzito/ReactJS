import { useCart } from "../../hooks/CartHook"
import { useNotification } from "../../hooks/NotificationHook"

const CartItem = (item) => {
    const { removeItem } = useCart()
    const { setNotification } = useNotification()
    
    const handleRemove = (id) => {
        removeItem(id)
        setNotification("warning", `Se elimino ${item.name}`)
    }

    return (
        <li className="cartItem">
            <h2 className="name">{item.name}</h2>
            <h3 className="unitaryPrice">Precio unitario: ${item.price}</h3>
            <h3 className="quantity">Cantidad: {item.quantity}</h3>
            <h3 className="subtotal">Subtotal: $ {item.price * item.quantity}</h3>
            <button className="itemEraser" onClick={() => handleRemove(item.id)}>❌</button>
        </li>
    )
}

export default CartItem