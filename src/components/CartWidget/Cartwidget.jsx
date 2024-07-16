import cart from "../../assets/cart.svg";

const CartWidget = ({ cartCount }) => {
  return (
    <a className="nav-link" href="#">
      <img src={cart} />
      {cartCount}
    </a>
  );
}

export default CartWidget