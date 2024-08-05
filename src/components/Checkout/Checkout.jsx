import { useCart } from "../../hooks/CartHook"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { database } from "../../services/firebase"
import { useNotification } from "../../hooks/NotificationHook"
import { Link } from "react-router-dom"

const Checkout = () => {
    const { cart, totalQuantity, totalValue, clearCart } = useCart()
    const total = totalValue()
    const { setNotification } = useNotification()

    const createOrder = async (buyer) => {
        try {
            const objOrder = { buyer: buyer, items: cart, totalQuantity, total, date: new Date() }

            console.log(objOrder);
            
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
            console.error(error);
        }
    }

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <form onSubmit={e => {
                e.preventDefault()

                const buyer = {
                    firstName: e.target.name.value,
                    lastName: e.target.lastName.value,
                    phoneNumber: Number(e.target.phoneNumber.value),
                    email: e.target.email.value,
                    adress: e.target.adress.value,
                }

                createOrder(buyer)
            }}>
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" autoComplete="true" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="lastName" autoComplete="true" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Telefono</label>
                        <input type="number" className="form-control" id="phoneNumber" placeholder="(Cod. de área) Número" autoComplete="true" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Direccion de Email</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="ejemplo@ejemplo.com" required autoComplete="true" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="adress" className="form-label">Direccion de entrega</label>
                        <input type="text" className="form-control" id="adress" placeholder="Retiro en local o Direccion" autoComplete="true" required />
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
