import React from 'react'

const Notification = ({message}) => {
    if(!message) return null;
    const redNotificarion = {
        backgroundColor : '#c42e1a',
        boxShadow: "5px 5px 5px #c42e1a"
    }
    return (
        <div className = "notification" style={message.includes('deleted')?redNotificarion : null} >
            {message}
        </div>
    )
}

export default Notification
