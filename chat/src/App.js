import React from 'react'
import { Route, Routes } from "react-router";

import "./App.css"

import Nav from './component/Nav'
import SideNav from './component/SideNav'
import ChatTrade from './component/ChatTrade'
import Login from './component/Login';
import Info from './component/Info';

function App() {

  return (
    <div className="containerr">
      <Routes>
        <Route path="/login" element={
          <div className="containerLogin">
            <Login />
            <Info/>
          </div>
        } />

        <Route path="/" element={
          <>
            <Nav />
            <div className="contentSideChat">
              <SideNav />
              <ChatTrade />
            </div>
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
