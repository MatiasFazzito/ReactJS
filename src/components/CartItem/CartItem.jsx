const CartItem = (item) => {
    return (
        <li className="cartItem">
            <h2>{item.name}</h2> <h3>Precio unitario: ${item.price}</h3> <h5>Cantidad: {item.quantity}</h5>
        </li>
    )
}

export default CartItem