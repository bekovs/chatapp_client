import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { fetchMessages, ws } from "../store/messages/messageActions";
import { storeMessages } from "../store/messages/messageSlice";
import { isJsonString } from "../helpers/funcs";

function ChatWindow() {
  const messages = useAppSelector((state) => state.messages.messages);
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [])

  ws.onmessage = (data: any) => {
    if(isJsonString(data.data)){
      dispatch(storeMessages(JSON.parse(data.data)));
    }
  }

  useEffect(() => {
    ref.current?.scrollIntoView({
      block: "start"
    })
  }, [messages.length])

  return (
    <div className="chat_box">
      {
        messages?.map(({_id, author, body}, index) => (
          <div className="chat_box-message" key={_id ? _id : index} ref={ref}>
            {author}: {body}
          </div>
        ))
      }
    </div>
  )
}

export default ChatWindow