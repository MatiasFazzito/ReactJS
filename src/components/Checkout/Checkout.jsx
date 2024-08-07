import { useCart } from "../../hooks/CartHook"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { database } from "../../services/firebase"
import { useNotification } from "../../hooks/NotificationHook"
import { Link } from "react-router-dom"
import { useCheckout } from "../../hooks/CheckoutHook"

const Checkout = () => {
    const { cart, totalQuantity, totalValue, clearCart } = useCart()
    const total = totalValue()
    const { setNotification } = useNotification()
    const { formValues, handleInput, handleSubmition } = useCheckout()

    const createOrder = async () => {
        try {
            const objOrder = { buyer: formValues, items: cart, totalQuantity, total, date: new Date() }
            const ids = cart.map((item) => item.id)
            const productRef = collection(database, "productos")
            const productsFirestore = await getDocs(query(productRef, where(documentId(), "in", ids)))
            const { docs } = productsFirestore
            const outOfStock = []
            const batch = writeBatch(database)

            docs.forEach((doc) => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock
                const productInCart = cart.find((prod) => prod.id === doc.id)
                const productQuantity = productInCart?.quantity

                if (stockDB >= productQuantity) {
                    batch.update(doc.ref, { stock: stockDB - productQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(database, "orders")
                const orderAdd = await addDoc(orderRef, objOrder)
                setNotification("success", `El id de su orden es ${orderAdd.id}`)
                clearCart()
            } else {
                setNotification("danger", "La orden no pudo ser creada")
            }
        } catch (error) {
            setNotification("warning", "algo no salio bien")
        }
    }

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmition}>
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" name="name" autoComplete="true" value={formValues.name} required onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="lastName" name="lastName" autoComplete="true" value={formValues.lastName} required onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Telefono</label>
                        <input type="number" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="(Cod. de área) Número" autoComplete="true" value={formValues.phoneNumber} required onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Direccion de Email</label>
                        <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="ejemplo@ejemplo.com" autoComplete="true" value={formValues.email} required onChange={handleInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="adress" className="form-label">Direccion de entrega</label>
                        <input type="text" className="form-control" id="adress" name="adress" placeholder="Retiro en local o Direccion" autoComplete="true" value={formValues.adress} required onChange={handleInput} />
                    </div>
                </fieldset>
                <fieldset className="text-center">
                    <button type="submit" className="btn submit" onClick={createOrder}>Enviar</button>
                    <Link to={"/"}><button type="reset" className="btn clear" onClick={clearCart}>Cancelar compra</button></Link>
                </fieldset>
            </form>
        </div>
    )
}

export default Checkout