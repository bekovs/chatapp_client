import { useState } from "react"

function ChatInput() {
    const [message, setMessage] = useState('');

    return (
        <div className="chat_input">
            <form onSubmit={(event) => {
                event.preventDefault();
                console.log(message)
                // post message
            }}>
                <input type="text" onChange={(event) => setMessage(event.target.value)} />
                <button type="submit">send</button>
            </form>
        </div>
    )
}

export default ChatInput