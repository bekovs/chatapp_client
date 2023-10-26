function UserBlock() {
  return (
    <div className="user_box">
        <h3>Hello, guest</h3>
        <form>
            <input type="text" />
            <button>save</button>
        </form>
        <p className="copyright">ChatApp © 2023</p>
    </div>
  )
}

export default UserBlock