import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import UserBlock from "./components/UserBlock";

function App () {
  return (
    <>
      <div className="container">
        <h2>Feel free to write anything</h2>
        <div className="main-page__layout">
          <div className="main-page__layout_left">
            <ChatWindow />
            <ChatInput />
          </div>
          <div className="main-page__layout_right">
            <UserBlock />
          </div>
        </div>
      </div>
    </>
  )
}

export default App;