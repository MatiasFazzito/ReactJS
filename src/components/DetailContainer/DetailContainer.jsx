import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Detail from "../Detail/Detail"
import { doc, getDoc } from "firebase/firestore"
import { database } from "../../services/firebase"
import { useNotification } from "../../hooks/NotificationHook"

const DetailContainer = () => {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState()
  const { id } = useParams()
  const { setNotification } = useNotification()

  useEffect(() => {
    setLoading(true)
    getDoc(doc(database, "productos", id)).then((res) => {
      const product = { id: res.id, ...res.data() }
      setProduct(product)
    })
      .catch(setNotification("danger", "No se pudo cargar el detalle del producto"))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <h1 className="loading">Cargando productos...</h1>
  }

  return (
    <div className="details">
      <h1>Caracteristicas de:</h1>
      <Detail {...product} />
    </div>
  )
}

export default DetailContainer