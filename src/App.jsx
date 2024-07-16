import { useState } from "react"
import Nav from "./components/Navbar/Nav"
import ProductContainer from "./components/ProductContainer/ProductContainer"
import Footer from "./components/Footer/Footer"
import DetailContainer from "./components/DetailContainer/DetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [cartCount, setCartCount] = useState(5)

  return (
    <BrowserRouter>
      <Nav cartCount={cartCount} />
      <Routes>
        <Route exact path="/" element={<ProductContainer greeting={"Bienvenidos a Rocktica"} />} />
        <Route exact path="/category/:id" element={<ProductContainer />} />
        <Route exact path="/item/:id" element={<DetailContainer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App