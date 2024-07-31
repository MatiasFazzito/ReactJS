const Checkout = () => {
    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <form action="">
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Telefono</label>
                        <input type="number" className="form-control" id="phoneNumber" required placeholder="(Cod. de área) Número" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Direccion de Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="ejemplo@ejemplo.com" required />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="deliver" className="form-label">Seleccione opcion de entrega</label>
                        <select className="form-select" aria-label="Default select example" id="deliver">
                            <option defaultValue value="pickup">Retiro por el local</option>
                            <option value="send">Envio a domicilio</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset className="text-center">
                    <button type="submit" className="btn submit">Enviar</button>
                    <button type="reset" className="btn clear">Limpiar</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Checkout