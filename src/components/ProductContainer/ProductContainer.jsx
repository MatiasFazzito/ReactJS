import ProductList from "../ProductList/ProductList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../hooks/NotificationHook"
import { getProducts } from "../../services/firebase/firestore/productos"
import { useAsync } from "../../hooks/useAsync"

const ProductContainer = ({ greeting }) => {
    const { category } = useParams()
    const { setNotification } = useNotification()
    const asyncFunction = () => getProducts(category)
    const { data, loading, error } = useAsync(asyncFunction, [category])

    if (loading) {
        return <h1 className="loading">Cargando productos...</h1>
    }
    if (error) {
        return setNotification("danger", "Error al cargar los productos")
    }

    return (
        <main>
            <section className="productContainer">
                <h1>{greeting}</h1>
                <div>
                    <ProductList products={data} />
                </div>
            </section>
        </main>
    )
}

export default ProductContainer