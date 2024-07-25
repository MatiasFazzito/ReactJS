import { useState } from "react"

const ProductCounter = ({ initialValue = 1, stock }) => {

  const addToCart = () => {
    console.log("click")
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

  const [count, setCount] = useState(initialValue)

  return (
    <div className="counter">
      <button onClick={decrement}>-1</button>
      <button onClick={addToCart}>Añadir al carrito {count}</button>
      <button onClick={increment}>+1</button>
    </div>
  )
}

export default ProductCounter