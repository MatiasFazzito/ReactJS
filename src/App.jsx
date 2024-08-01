import Nav from "./components/Navbar/Nav"
import ProductContainer from "./components/ProductContainer/ProductContainer"
import Footer from "./components/Footer/Footer"
import DetailContainer from "./components/DetailContainer/DetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import CartContainer from "./components/CartContainer/CartContainer"
import Checkout from "./components/Checkout/Checkout"
import { NotificationProvider } from "./context/NotificationContext"

function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <CartProvider>
          <Nav />
          <Routes>
            <Route exact path="/" element={<ProductContainer greeting={"Bienvenidos a Rocktica"} />} />
            <Route exact path="/category/:category" element={<ProductContainer />} />
            <Route exact path="/detail/:id" element={<DetailContainer />} />
            <Route exact path="/cart/" element={<CartContainer />} />
            <Route exact path="/cart/checkout/" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </NotificationProvider>
    </BrowserRouter>
  )
}

export default App