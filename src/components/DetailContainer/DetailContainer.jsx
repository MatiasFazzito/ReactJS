import { useParams } from "react-router-dom"
import { getProductById } from "../../asyncMock"
import { useEffect, useState } from "react"
import Detail from "../Detail/Detail"

const DetailContainer = () => {
  const [product, setProduct] = useState()
  const { id } = useParams()

  useEffect(() => {
    getProductById(id).then((res) => (setProduct(res))).catch((err) => console.log(err))
  }, [id])

  return (
    <div className="details">
      <h1>Caracteristicas de:</h1>
      <Detail {...product} />
    </div>
  )
}

export default DetailContainer