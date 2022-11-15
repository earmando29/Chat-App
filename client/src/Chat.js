import React from 'react'

function Chat({ socket, username, room }) {
    return (
    <div>
        <div className='chat-header'>
            <p>Live Chat</p>
        </div>
        <div className='chat-body'>
            <input type="text" placeholder="Hey..." />
            <button>&#9658;</button>
        </div>
        <div className='chat-footer'></div>
    </div>
    );    
}

export default Chat

