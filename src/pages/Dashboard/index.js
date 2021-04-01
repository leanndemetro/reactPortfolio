import React from "react";
import "./style.css"

function Dashboard() {
  return (
  <div>
    <br></br>
    <hr></hr>
     <div className="btnArea">
     <p className="TITLEDash">
    Alyssa DeMetro
     </p>
    <p className="SUBDash"> MERN Stack Web Developer 
    <br></br>
    Certified by the University of Central Florida</p>
    <br></br>
    <a href="/About"><input className="dashBtn" type="button" value="LEARN MORE"></input></a>
    </div>
    <hr></hr>
    <br></br>
    </div>

   
  

  );
}


export default Dashboard;