import React, { useState } from 'react'
import useInput from "../hooks/useInput"
import "../assets/style/login.css"


function Login() {
  const name = useInput()
  const password = useInput()
  const phone = useInput()
  const email = useInput()
  const [login, setLogin] = useState(true)
  const handleSumit = () => { }
  return (
    <div className="login">
      {login ?
        <>
          {/* LOGIN */}
          <div style={{ fontSize: "20px" }} className="nameContact">Login</div>
          <form className="formLogin" onSubmit={handleSumit}>
            <div className="inputForm ">
              <input className="inputF" placeholder="Email" {...email}/>
            </div>
            <div className="inputForm">
              <input className="inputF" type="password" placeholder="Password" {...password}/>
            </div>
            <button style={{ margin: 0, marginTop: "20px" }} className="newChat" >LOGIN</button>
          </form>
          <div style={{ fontSize: "15px", textAlign: "center", marginTop: "20px" }} className="unread" type="button" onClick={() => setLogin(false)}>REGISTER</div>
        </>
        :
        <>

          {/* REGISTER */}
          <div style={{ fontSize: "20px" }} className="nameContact">Register</div>
          <form className="formLogin" onSubmit={handleSumit}>
            <div className="inputForm ">
              <input className="inputF" placeholder="Email" {...email}/>
            </div>
            <div className="inputForm">
              <input className="inputF" placeholder="Name" {...name}/>
            </div>
            <div className="inputForm">
              <input className="inputF" placeholder="Phone" {...phone}/>
            </div>
            <div className="inputForm">
              <input className="inputF" type="password" placeholder="Password" {...password}/>
            </div>
            <button style={{ margin: 0, marginTop: "20px" }} className="newChat">REGISTER</button>
          </form>
          <div style={{ fontSize: "15px", textAlign: "center", marginTop: "20px" }} className="unread" type="button" onClick={() => { setLogin(true) }}>Login
          </div>
        </>}
    </div >
  )
}

export default Login