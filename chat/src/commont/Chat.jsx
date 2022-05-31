import React from 'react'
import "../assets/style/chat.css"

function Chat() {
    const newMessage = {
        name: "Agent Rue",
        hour: "10:30",
        text: "Yes we currently run both on our platform here"
    };
    const fakeData = [
        {
            name: "Me",
            hour: "10:22",
            text: "Hello am new to this system can i get a breakdown on how it works?"
        },
        {
            name: "Agent Rue",
            hour: "10:24",
            text: "Yes we currently run both on our platform here"
        },
        {
            name: "Me",
            hour: "3 minutes ago",
            text: "Please, can you go into details bout the service"
        },

    ];
    return (
        <div>
            {fakeData.map(({ name, hour, text }) => (
                <div className={name === "Me" ? "classLeft" : "classRight"}>
                    <div className="data">{`${name}, ${hour}`}</div>
                    <div className="text">{text}</div>
                </div>
            ))}
            <div className="newMessage">
                <div className="unread">unread</div>
                <div className="unreadLine"></div>
            </div>
            {newMessage ? 
                <div className={newMessage.name === "Me" ? "classLeft" : "classRight"}>
                    <div className="data">{`${newMessage.name}, ${newMessage.hour}`}</div>
                    <div className="text">{newMessage.text}</div>
                </div> 
                :null}

        </div>
    )
}

export default Chat