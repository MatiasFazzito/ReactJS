import cart from "../../assets/cart.svg"
import { useCart } from "../../hooks/CartHook"

const CartWidget = () => {
  const {totalQuantity} = useCart()

  return (
    <>
      <img src={cart} />
      <p>{totalQuantity}</p>
    </>
  );
}

export default CartWidget