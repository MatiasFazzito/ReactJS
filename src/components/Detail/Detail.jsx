const Detail = ({ name, img, description, frente, patilla, lente }) => {
  return (
    <article className="detail">
      <h1 className="name">{name}</h1>
      <img src={img} alt={name} />
      <h2 className="description">{description}</h2>
      <hr />
      <div className="caracteristics">
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