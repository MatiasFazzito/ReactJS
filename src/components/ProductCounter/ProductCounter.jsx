import { useState } from "react"
import { useCart } from "../../hooks/CartHook"
import { useNotification } from "../../hooks/NotificationHook"

const ProductCounter = ({ initialValue = 1, id, name, price, stock }) => {
  const [count, setCount] = useState(initialValue)
  const {addToCart} = useCart()
  const {setNotification} = useNotification()

  const handdleAdd = () => {
    const productObj = {
      id, name, price, quantity: count
    }
    if (stock !== 0) {
      addToCart(productObj)
      setNotification("success", `Se agregaron ${count} de ${name}`)
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