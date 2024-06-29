import { useState } from "react"
import Nav from "./components/Navbar/Nav"
import Products from "./components/Products/Products"
import Footer from "./components/Footer/Footer"

function App() {

  const { cartCount, setCartCount } = useState(1)

  return (
    <>
      <Nav cartCount={cartCount}/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App