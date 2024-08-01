import { createContext, useState } from "react"

const Notification = ({ message, notifType }) => {
    const background = {
        success: "green",
        warning: "yellow",
        danger: "red",
    }
    const notifStyles = {
        position: "fixed",
        top: 100,
        right: 30,
        backgroundColor: background[notifType],
        color: "black",
        fontWeight: "bold",
        padding: 20,
        borderRadius: 50,
    }

    if (message === "") {
        return
    } else {
        return <div style={notifStyles}>{message}</div>
    }
}

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState()
    const [notifType, setNotifType] = useState()

    const setNotification = (type, msg) => {
        setMessage(msg)
        setNotifType(type)
        setTimeout(() => {
            setMessage("")
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={message} notifType={notifType} />
            {children}
        </NotificationContext.Provider>
    )
}
