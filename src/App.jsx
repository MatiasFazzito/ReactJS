import { useState } from "react"
import Nav from "./components/Navbar/Nav"
import Products from "./components/Products/Products"
import Footer from "./components/Footer/Footer"

function App() {

  const [cartCount, setCartCount ] = useState(5)

  return (
    <>
      <Nav cartCount={cartCount}/>
      <Products greeting={"Productos destacados"}/>
      <Footer/>
    </>
  )
}

export default App