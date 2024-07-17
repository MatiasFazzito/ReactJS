import { Link } from "react-router-dom"

const Product = ({ id, name, price, img }) => {
  return (
    <article className="product">
      <h1 className="nombre">{name}</h1>
      <Link to={`/detail/${id}`}><img src={img} alt={name} /></Link>
      <h2>{price}</h2>
      <button>Añadir al carrito</button>
    </article>
  )
}

export default Product