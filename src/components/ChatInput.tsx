import { useState } from "react"
import { ws } from "../store/messages/messageActions";

function ChatInput() {
    const [message, setMessage] = useState('');

    const sendMsg = () => {
        ws.send(JSON.stringify({
                author: localStorage.getItem('chatapp-username') || 'guest',
                body: message,
            }))
        console.log('sent')
        setMessage('');
    }

    return (
        <div className="chat_input">
            <form onSubmit={(event) => {
                event.preventDefault();
                sendMsg();
            }}>
                <input type="text" value={message} onChange={(event) => setMessage(event.target.value)} required />
                <button type="submit">send</button>
            </form>
        </div>
    )
}

export default ChatInput