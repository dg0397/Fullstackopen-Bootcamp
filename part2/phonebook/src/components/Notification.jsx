import React from 'react'

const Notification = ({message}) => {
    if(!message) return null;
    const redNotificarion = {
        backgroundColor : '#c42e1a',
        boxShadow: "5px 5px 5px #c42e1a"
    }
    const condition = message.includes("deleted from the server") | message.includes("Validation failed")
    return (
        <div className = "notification" style={condition?redNotificarion : null} >
            {message}
        </div>
    )
}

export default Notification
