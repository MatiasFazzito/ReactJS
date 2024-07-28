import ProductList from "../ProductList/ProductList"
import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ProductContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState()
    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        if (!category) {
            getProducts().then((res) => { setProducts(res) })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getProductsByCategory(category).then((res) => { setProducts(res) })
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [category])

    if (loading) {
        return <h1 className="loading">Cargando productos...</h1>
    }

    return (
        <section className="productContainer">
            <h1>{greeting}</h1>
            <div className="product-grid">
                <ProductList products={products} />
            </div>
        </section>
    )
}

export default ProductContainer