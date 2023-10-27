import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { fetchMessages } from "../store/messages/messageActions";

function ChatWindow() {

  const messages = useAppSelector((state) => state.messages.messages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMessages);
  }, [])

  return (
    <div className="chat_box">
      {
        messages.map(({_id, author, body}) => (
          <div className="chat_box-message" key={_id}>
            {author}: {body}
          </div>
        ))
      }
    </div>
  )
}

export default ChatWindow