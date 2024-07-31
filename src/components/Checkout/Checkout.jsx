import { useState } from "react"
import { useCart } from "../../hooks/CartHook"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { database } from "../../services/firebase"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, totalQuantity, totalValue } = useCart()
    const total = totalValue()

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: "pepe",
                    lastName: "pepe",
                    phoneNumber: "123",
                    email: "pepe@pepe",
                    deliver: "retira por local",
                },
                items: {
                    cart,
                    totalQuantity,
                    total,
                    date: new Date()
                }
            }
            const ids = cart.map((item) => item.id)

            const productRef = collection(database, "productos")

            const productsFirestore = await getDocs(query(productRef, where(documentId(), "in", ids)))
            const { docs } = productsFirestore

            const outOfStock = []
            const batch = writeBatch(database)

            console.log(outOfStock);

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

            if (outOfStock.lenght === 0) {
                await batch.commit()

                const orderRef = collection(database, "orders")
                const orderAdd = await addDoc(orderRef, objOrder)
                console.log(`El id de su orden es ${orderAdd.id}`)
                
                setOrderCreated(true)
            } else {
                console.log("No se pudo crear la orden")
            }
        } catch (error) {
            console.log("error")
        } finally {
            setLoading(false)
        }

        if (loading) {
            return <h1>La orden esta siendo generada</h1>
        }

        if (orderCreated) {
            return <h1>La orden fue creada correctamente</h1>
        }
    }
    return (
        /*<div className="checkout">
            <h1>Checkout</h1>
            <form action="">
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="lastName" required />
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
                    <button type="submit" className="btn submit" onClick={createOrder}>Enviar</button>
                    <button type="reset" className="btn clear">Limpiar</button>
                </fieldset>
            </form>
        </div>*/
        <button type="submit" className="btn submit" onClick={createOrder}>Enviar</button>
    )
}

export default Checkout