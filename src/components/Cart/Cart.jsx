import { useCart } from "../../hooks/CartHook"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { cart, totalValue } = useCart()
    const total = totalValue()

    return (
        <>
            <ul className="cartList">
                {cart.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </ul>
            <h3 className="cartTotal">Valor total del pedido: ${total}</h3>
        </>
    )
}

export default Cart