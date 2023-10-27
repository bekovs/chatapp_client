import { useState } from "react"

function UserBlock() {

  const [username, setUsername] = useState(localStorage.getItem('chatapp-username') || 'guest');

  return (
    <div className="user_box">
      <div>
        <h3>Hello, {username}</h3>
        <form onSubmit={(event) => {
          event.preventDefault();
          localStorage.setItem('chatapp-username', username);
        }}>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <button type="submit">save</button>
        </form>
      </div>
      <p className="copyright">ChatApp © 2023</p>
    </div>
  )
}

export default UserBlock