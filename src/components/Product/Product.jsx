const Product = ({id, name, price, category, img, description}) => {
  return (
    <article className="product">
        <h1 className="nombre">{name}</h1>
        <img src={img} alt={name} />
        <h2>{price}</h2>
        <button>Añadir al carrito</button>
    </article>
  )
}

export default Product