import { useCart } from "../../hooks/CartHook"
import Cart from "../Cart/Cart"
import { Link } from "react-router-dom"

const CartContainer = () => {
    const { cartHasItems } = useCart()

    if (cartHasItems()) {
        return (
            <>
                <div className="cartContainer">
                    <Cart />
                </div>
                <div className="cartFunction">
                    <Link className="cartBuy" to="/cart/checkout"><button >Finalizar compra</button></Link>
                    <button className="cartErase">Limpiar carrito</button>
                </div>
            </>
        )
    } else {
        return <h1 className="emptyCart">Por favor agregue algun item al carrito</h1>
    }
}

export default CartContainer