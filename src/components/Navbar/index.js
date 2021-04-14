import React, { Component } from "react";
import "./style.css"
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { GiHamburgerMenu } from 'react-icons/gi';

class Navbar extends Component {


  render() {
    return (
      <MDBDropdown>
      <MDBDropdownToggle color="grey" className="navDropdown">
      <GiHamburgerMenu className="burgerIcon"/>
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <a href="/"><MDBDropdownItem className="dropdownItem" >Home</MDBDropdownItem></a>
        <a href="/About"><MDBDropdownItem className="dropdownItem" > About </MDBDropdownItem></a>
        <a href="/Portfolio"><MDBDropdownItem className="dropdownItem" >Portfolio</MDBDropdownItem></a>
      </MDBDropdownMenu>
    </MDBDropdown>

    );
  }
}

export default Navbar;