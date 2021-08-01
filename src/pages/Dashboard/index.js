import React from "react";
import "./style.css"

function Dashboard() {
  return (
    <div className="dashboard">
      <img className="dashImg" src="https://i.imgur.com/zUFxB7s.jpg"></img>
      <img className="dashImg" src="https://i.imgur.com/fPkZOhV.jpg"></img>
      <img className="dashImg" src="https://i.imgur.com/q2Lfb5C.jpg"></img>
      <img className="dashImg" src="https://i.imgur.com/RQbduUQ.jpg"></img>
     <br></br>
     <br></br>
     <p>Alyssa DeMetro is a freelance Web-Developer based out of Central Florida.
                    
                    She works with a diverse range of technologies including HTML, CSS, Javascript,
                    
                     third-party APIs, Progressive Web Applications, MySQL, API design, and the 
                     MERN stack (MongoDB, Express.js, React.js, Node.js)
                </p>
                <a className="aboutLink" href="About">Learn More</a>
    </div>




  );
}


export default Dashboard;