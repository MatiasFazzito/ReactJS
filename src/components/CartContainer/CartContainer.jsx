import { useCart } from "../../hooks/CartHook"
import Cart from "../Cart/Cart"


const CartContainer = () => {

    const { cartHasItems } = useCart()

    if (cartHasItems()) {
        return (
            <div className="cartContainer">
                <Cart />
                <div className="cartFunction">
                    <button className="cartBuy">Finalizar compra</button>
                    <button className="cartErase">Limpiar carrito</button>
                </div>
            </div>
        )
    } else {
        return <h1 className="emptyCart">Por favor agregue algun item al carrito</h1>
    }

}

export default CartContainer