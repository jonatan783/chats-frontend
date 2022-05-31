import React from 'react'
import Chat from '../commont/Chat'
import Contacts from '../commont/Contacts'
import useInput from "../hooks/useInput"
import "../assets/style/chatTrade.css"

function ChatTrade() {
  const msj = useInput("")
  const handleSumit = (e) => {
    e.preventDefault();
    console.log(msj.value)
    msj.setValue("")
  }

  return (
    <div className="chatTrade">

      <div className="contact">
        <div className="">
          <div className="me">
            <div className="imgContac imgMe">
              <div className="iconStateOn"></div>
            </div>
            <div className="containerData">
              <div className="nameContact">Ale Jonatan</div>
              <div className="state">Online</div>
            </div>
          </div>
          <Contacts />
        </div>
        <button className="newChat">
        New chat
        </button>
      </div>

      <div className="chats">
        <Chat />
        <div className="containerChat">
          <form onSubmit={handleSumit} className="formChat">
            <input className="inputChat" placeholder="Start typing here" {...msj} />
            <button type="submit button" className="buttonChat">send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ChatTrade