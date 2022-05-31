import React from 'react'
import "../assets/style/chatTrade.css"

function Contacts() {
    const fakedata = [
        {
            name: "Agent Rue",
            online: true,
            typing: true,
            notification: 0,
        },
        {
            name: "Agent Rue",
            online: false,
            typing: false,
            notification: 10,
        },
        {
            name: "Agent Rue",
            online: false,
            typing: false,
            notification: 9,
        },
        {
            name: "Agent Rue",
            online: true,
            typing: false,
            notification: 0,
        }
    ]
  return (
      <div className="contacts">
          {fakedata.map(({ name, online, typing, notification }, i) => (
              <div
                  className="list cursor:pointer"
                  type="button"
                  onClick={() => { alert("precionaste") }}
                  key={i}>
                  <div className="imgContac">
                      <div className={online ? "iconStateOn" : "iconStateOff"}></div>
                  </div>
                  <div className="containerData">
                      <div className="nameContact">{name}</div>
                      <div className="state">{online ? "Online" : "Offline"}</div>
                  </div>
                  <div className="typing">{typing ? "typing..." : ""}</div>
                  {notification ?
                      <div className="contAlert">
                          <div className="contAlertNum">{notification}</div>
                      </div>
                      : null}
              </div>
          ))}
      </div>
  )
}

export default Contacts