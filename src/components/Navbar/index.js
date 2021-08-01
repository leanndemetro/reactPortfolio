import React, { Component } from "react";
import "./style.css"

class Navbar extends Component {


  render() {
    return (
      <div className="navbar">
        <br></br>
        <hr></hr>
        <p className="navNameText">Alyssa De Metro <a className="navLinks" href="/About">About</a> <a className="navLinks" href="/Portfolio">Portfolio</a> <a className="navLinks" href="/Contact">Contact</a></p>
      </div>

    );
  }
}

export default Navbar;