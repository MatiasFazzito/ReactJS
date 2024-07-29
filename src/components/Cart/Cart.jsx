import { useCart } from "../../hooks/CartHook"

const Cart = () => {
    const {cart} =useCart()

    return (
        <ul className="cartList">
            {cart.map((item) => (
                <li className="cartItem" key={item.id}><h5>{item.name}</h5> <h5>{item.price}</h5> <h5>{item.quantity}</h5></li>
            )
            )}
        </ul>
    )
}

export default Cart