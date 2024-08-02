import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { database } from "../index";
import { createProductAdaptedFromFirebase } from "../../../Adapters/ProductAdapter";

export const getProducts = (category) => {
    const productCollection = category ? query(collection(database, "productos"), where("category", "==", category)) : collection(database, "productos")

    return getDocs(productCollection)
        .then((querySnapshot) => {
            const productAdapted = querySnapshot.docs.map((doc) => {
                return createProductAdaptedFromFirebase(doc)
            })
            return productAdapted
        }).catch((error) => {
            return error
        })
}

export const getProductsByID = (itemId) => {
    const productDoc = doc(database, "productos", itemId)

    return getDoc(productDoc)
        .then((queryDocumentSnapshot) => {
            const productAdapted = createProductAdaptedFromFirebase(queryDocumentSnapshot)

            return productAdapted
        }).catch((error) => {
            return error
        })
}