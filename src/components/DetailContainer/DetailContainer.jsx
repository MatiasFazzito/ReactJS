import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import { useEffect, useState } from "react"
import Detail from "../Detail/Detail"

const DetailContainer = () => {
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    getProductById(id).then((res) => (setProduct(res)))
    .catch((err) => console.log(err))
    .finally (() => setLoading(false))
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