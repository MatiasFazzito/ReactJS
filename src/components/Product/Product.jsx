import { Link } from "react-router-dom"
import ProductCounter from "../ProductCounter/ProductCounter"

const Product = ({ id, name, price, img, stock }) => {
  const disponibilidad = () => {
    if (stock !== 0) {
      return "Disponible"
    } else return "Stock agotado"
  }

  const disponible = disponibilidad()

  return (
    <article className="product">
      <h1 className="nombre">{name}</h1>
      <Link to={`/detail/${id}`}><img src={img} alt={name} /></Link>
      <h2>{price}</h2>
      <h3>{disponible}</h3>
      <ProductCounter id={id} name={name} price={price} stock={stock} />
    </article>
  )
}

export default Product