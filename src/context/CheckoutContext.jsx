import { createContext, useState } from "react"

export const CheckoutContext = createContext()

export const CheckoutProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({
        name: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        adress: "",
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const handleSubmition = (e) => {
        e.preventDefault()

        return formValues
    }

    const obj = { formValues, handleInput, handleSubmition }

    return (
        <CheckoutContext.Provider value={obj}>
            {children}
        </CheckoutContext.Provider>
    )
}
