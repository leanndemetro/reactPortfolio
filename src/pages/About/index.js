import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";




function About() {
  return (
   <Container>
   <Row>
     <Col sm={2}>
  <span className="TITLE">
   About.
    </span>
   </Col>
   <Col sm={8}>
      </Col>
  </Row>
  <hr></hr>
  <Row>
  <Col sm={4}>
  <div className="aboutCardRight">
        <img className="meImg" src="https://i.imgur.com/dry8RG7.jpg?1"></img>
  </div>
  <div className="aboutCardLeft">
        <p className="aboutText">My name is Alyssa DeMetro - I'm an Orlando Native, and a graduate of the University Of Central Florida Full-Stack Coding Bootcamp.</p>
        </div>
      </Col>
    <Col sm={8}>
      <div className="aboutCardRight">
        <a target="_blank" href="https://api.badgr.io/public/assertions/tDt35IJZQT-VVtAvMjxGfA?identity__email=leanndemetro%40gmail.com"><img className="certImg" src="https://i.imgur.com/ZEsoyI7.jpg"></img></a>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      
    </Col>
  </Row>
  <Row>
  <br></br></Row>
  <Row>
    <Col sm={8}>
    <a className="resLink" target="_blank" href="https://www.linkedin.com/in/alyssa-de-metro-59abba1b0/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADFMxcYB0XJ1lHN-GVVtohMQbcYjdf0W4pc,1614205808207)/">
  <div className="aboutCardRight">
  <img className="resImg" src="https://i.imgur.com/JJbbBz3.jpg"></img>
  </div>
  </a>
    </Col>
     <Col sm={4}>
     <div className="aboutCardLeft">
          <p className="aboutTextTwo"> I have a fundamental working knowledge of HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, Mongoose, React.js, and more. I have experience working with diverse teams or independently to meet demanding deadlines. I am confident and capable of building fully functional MERN stack web applications from start to finish. I am passionate about continuing my education and learning new technologies, and I have the patience and research skills necessary to resolve issues independently.
            I am actively seeking intership, volunteer, or employment opportunities.
          </p>
      </div>
      </Col>
  </Row>
  <br></br>
  <hr></hr>
  <br></br>
  </Container>
 
     
  
   
  );
}


export default About;