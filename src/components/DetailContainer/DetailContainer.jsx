import { useParams } from "react-router-dom"
import Detail from "../Detail/Detail"
import { useNotification } from "../../hooks/NotificationHook"
import { getProductsByID } from "../../services/firebase/firestore/productos"
import { useAsync } from "../../hooks/useAsync"

const DetailContainer = () => {
  const { id } = useParams()
  const { setNotification } = useNotification()
  const asyncFunction = () => getProductsByID(id)
  const { data, loading, error } = useAsync(asyncFunction, [id])

  if (loading) {
    return <h1 className="loading">Cargando productos...</h1>
  }

  if (error) {
    return setNotification("danger", "Error al cargar el detalle del producto")
  }

  return (
    <div className="details">
      <h1>Caracteristicas de:</h1>
      <Detail {...data} />
    </div>
  )
}

export default DetailContainer