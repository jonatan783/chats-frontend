import React from 'react'
import "../assets/style/sideNav.css"

function SideNav() {
  return (
    <div className="sideNav">
      <div className="containerChatSideNav">
        <div className="iconChatSide"></div>
        <div className="chatSideNav"> Chat</div>
        <div className="alertMessage">
          <div className="numOfMessages">10</div>
        </div>
      </div>
      <div className="containerLogout">
        <div className="filter"></div>
        <div className="logout" type="button">Logout</div>
      </div>
    </div>
  )
}

export default SideNav