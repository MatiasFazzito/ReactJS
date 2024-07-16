import ProductList from "../ProductList/ProductList"
import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"

const ProductContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then((res) => {
            setProducts(res)
        })
            .catch((err) => console.log(err))
    }, [])
    return (
        <section className="products">
            <h1>{greeting}</h1>
            <div className="product-grid">
                <ProductList products={products}/>
            </div>
        </section>
    )
}

export default ProductContainer