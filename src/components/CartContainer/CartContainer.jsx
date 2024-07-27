import { useCart } from "../../hooks/CartHook"
import Cart from "../Cart/Cart"


const CartContainer = () => {

    const { cartHasItems } = useCart()

    if (cartHasItems()) {
        return (
            <>
                <Cart />
            </>
        )
    } else {
        return <h1>Por favor agregue algun item al carrito</h1>
    }

}

export default CartContainer