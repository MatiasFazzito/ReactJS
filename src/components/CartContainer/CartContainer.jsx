import { useCart } from "../../hooks/CartHook"
import Cart from "../Cart/Cart"

const CartContainer = () => {
    const { cartHasItems, clearCart } = useCart()

    if (cartHasItems()) {
        return (
            <>
                <div className="cartContainer">
                    <Cart />
                </div>
            </>
        )
    } else {
        return <h1 className="emptyCart">Por favor agregue algun item al carrito</h1>
    }
}

export default CartContainer