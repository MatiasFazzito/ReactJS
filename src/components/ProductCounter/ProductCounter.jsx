import { useState } from "react"
import { useCart } from "../../hooks/CartHook"
import { useNotification } from "../../hooks/NotificationHook"

const ProductCounter = ({ initialValue = 1, id, name, price, stock }) => {
  const [count, setCount] = useState(initialValue)
  const { addToCart, isInCart } = useCart()
  const { setNotification } = useNotification()

  const handdleAdd = () => {
    const productObj = {
      id, name, price, quantity: count
    }

    if (!isInCart(productObj.id) && (stock !== 0)) {
      addToCart(productObj)
      setNotification("success", `Se agregaron ${count} de ${name}`)
    } else if (isInCart(productObj.id) || (stock === 0)) {
      setNotification("danger", "El producto ya esta en el carrito o su stock fue agotado")
    }
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count => count - 1)
    }
  }

  const increment = () => {
    if (count < stock) {
      setCount(count => count + 1)
    }
  }

  return (
    <div className="counter">
      <button onClick={decrement}>-1</button>
      <button onClick={handdleAdd}>Añadir al carrito {count}</button>
      <button onClick={increment}>+1</button>
    </div>
  )
}

export default ProductCounter