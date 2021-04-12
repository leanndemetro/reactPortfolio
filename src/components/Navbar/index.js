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
      <MDBDropdownMenu color>
        <MDBDropdownItem className="dropdownItem" >1</MDBDropdownItem>
        <MDBDropdownItem className="dropdownItem" >2</MDBDropdownItem>
        <MDBDropdownItem className="dropdownItem" >3</MDBDropdownItem>
        <MDBDropdownItem className="dropdownItem" >4</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>

    );
  }
}

export default Navbar;