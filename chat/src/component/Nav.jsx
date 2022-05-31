import React from 'react'
import useInput from "../hooks/useInput"
import "../assets/style/nav.css"


function Nav() {
    const search = useInput("")

    const handleSumit = (e) => {
        e.preventDefault()
        console.log(search)
    }
    return (
        <div className="nav">
            <div className="search">

                <form onSubmit={handleSumit} className="form">

                    <div className="bottonSummit" type="submit">
                        <div className="circle"></div>
                        <div className="mango"></div>
                    </div>

                    <input type="text"
                        className="inputSearch"
                        placeholder="User search"
                        {...search} />

                </form>

            </div>
            <div className="shutter">
                <div className="imgShutter"></div>
                <div className="name">Ale Jonatan</div>
                <div className="bell"> </div>
            </div>
        </div>
    )
}

export default Nav