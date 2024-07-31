import ProductList from "../ProductList/ProductList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { database } from "../../services/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

const ProductContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState()
    const { category } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = category ? query(collection(database, "productos"), where("category", "==", category)) : collection(database, "productos")
        getDocs(collectionRef).then((res) => {
            const products = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [category])

    if (loading) {
        return <h1 className="loading">Cargando productos...</h1>
    }

    return (
        <main>
            <section className="productContainer">
                <h1>{greeting}</h1>
                <div>
                    <ProductList products={products} />
                </div>
            </section>
        </main>
    )
}

export default ProductContainer