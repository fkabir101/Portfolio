import React from 'react'
import RenderNavbar from "./navbutton";
import "./style/header.css";

function Header(){
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="header">
      <a className="navbar-brand" id="title" href="/">Steven Kurt</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
        </ul>
        <span className="navbar-text">
          <RenderNavbar/>
        </span>
      </div>
    </nav>
  )
}

export default Header;