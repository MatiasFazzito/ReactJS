const Detail = ({ name, img, description, frente, patilla, lente }) => {
  return (
    <article className="detail">
      <h1>{name}</h1>
      <img src={img} alt={name} />
      <p>{description}</p>
      {/*<img src="./assets/measures.png" alt="medidas" /> no logro que funcione la ruta*/}
      <div className="caracteristicas">
        <ul>
          <li>{frente}</li>
          <li>{patilla}</li>
          <li>{lente}</li>
        </ul>
      </div>
    </article>
  )
}

export default Detail