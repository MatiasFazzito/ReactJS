import { Link } from "react-router-dom";
import cart from "../../assets/cart.svg";

const CartWidget = ({ cartCount }) => {
  return (
      <img src={cart} />
  );
}

export default CartWidget