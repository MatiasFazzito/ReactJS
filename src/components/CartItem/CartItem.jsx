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
            <h2>{item.name}</h2> <h3>Precio unitario: ${item.price}</h3> <h5>Cantidad: {item.quantity}</h5>  <h3>Subtotal: $ {item.price * item.quantity}</h3><button className="itemEraser" onClick={() => handleRemove(item.id)}>❌</button>
        </li>
    )
}

export default CartItem