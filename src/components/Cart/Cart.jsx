import { useCart } from "../../hooks/CartHook"

const Cart = () => {

    const {cart} =useCart()

    return (
        <ul>
            {cart.map((item) => (
                <li key={item.id}><p>{item.name}</p> <p>{item.price}</p> <p>{item.quantity}</p></li>
            )
            )}
        </ul>
    )
}

export default Cart