import Nav from "./components/Navbar/Nav"
import ProductContainer from "./components/ProductContainer/ProductContainer"
import Footer from "./components/Footer/Footer"
import DetailContainer from "./components/DetailContainer/DetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import CartContainer from "./components/CartContainer/CartContainer"

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<ProductContainer greeting={"Bienvenidos a Rocktica"} />} />
          <Route exact path="/category/:category" element={<ProductContainer />} />
          <Route exact path="/detail/:id" element={<DetailContainer />} />
          <Route exact path="/cart/" element={<CartContainer />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App