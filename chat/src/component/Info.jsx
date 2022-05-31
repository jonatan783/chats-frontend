import React from 'react'
import "../assets/style/info.css"

function Info() {
  return (
    <div className="info">
      <div className="firstMessage">
        <div className="box">
          <div className="firstIcon"></div>
        </div>
        <p>Sign in to be able to send unlimited messages with all your contacts!</p>
        <div className="boxSecond">
          <div className="secondIcon"></div>
        </div>


      </div>
      <div className="secondMessage">
        <div className="box">
          <div className="thirdIcon"></div>
        </div>
        <p>
          Get ready to receive notifications from all your contacts and be part of an unforgettable experience.
          We have anti-abuse security methods.
        </p>
      </div>
    </div>
  )
}

export default Info