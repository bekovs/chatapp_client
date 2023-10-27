import { useState } from "react"
import { useAppDispatch } from "../store/hooks";
import { sendMessage } from "../store/messages/messageActions";

function ChatInput() {
    const [message, setMessage] = useState('');
    const dispatch = useAppDispatch();

    const sendMsg = () => {
        dispatch(sendMessage({
            author: localStorage.getItem('chatapp-username') || 'guest',
            body: message,
        }))
        console.log('sent')
    }

    return (
        <div className="chat_input">
            <form onSubmit={(event) => {
                event.preventDefault();
                sendMsg();
            }}>
                <input type="text" onChange={(event) => setMessage(event.target.value)} required />
                <button type="submit">send</button>
            </form>
        </div>
    )
}

export default ChatInput