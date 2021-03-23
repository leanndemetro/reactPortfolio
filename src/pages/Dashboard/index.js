import React from "react";
import "./style.css"

function Dashboard() {
  return (
  <div>
    <hr></hr>
   <p className="TITLEDash">
    Alyssa DeMetro
     </p>
     <hr></hr>
     <div className="btnArea">
    <p className="SUBDash"> MERN Stack Web Developer 
    <br></br>
    Certified by the University of Central Florida</p>
    <br></br>
    <a href="/About"><input className="dashBtn" type="button" value="LEARN MORE"></input></a>
    </div>
    <hr></hr>
    </div>

   
  

  );
}


export default Dashboard;