function UserBlock() {
  return (
    <div className="user_box">
      <div>
        <h3>Hello, guest</h3>
        <form>
            <input type="text" />
            <button>save</button>
        </form>
      </div>
      <p className="copyright">ChatApp © 2023</p>
    </div>
  )
}

export default UserBlock