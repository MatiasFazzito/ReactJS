import ProductList from "../ProductList/ProductList"
import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ProductContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    useEffect(() => {
        if (!category) {
            getProducts().then((res) => {
                setProducts(res)
            })
                .catch((err) => console.log(err))
        } else {
            getProductsByCategory(category).then((res) => { setProducts(res) }).catch((err) => console.log(err))
        }
    }, [category])
    return (
        <section className="products">
            <h1>{greeting}</h1>
            <div className="product-grid">
                <ProductList products={products} />
            </div>
        </section>
    )
}

export default ProductContainer