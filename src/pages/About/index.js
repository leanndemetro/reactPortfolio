import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";




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
  <div className="aboutCardLeft">
        <p className="aboutText">My name is Alyssa DeMetro - I'm an Orlando Native, and a graduate of the University Of Central Florida Full-Stack Coding Bootcamp.</p>
        </div>
  <div className="aboutCardLeft">
        <p className="aboutText">I have a fundamental working knowledge of HTML, CSS, JavaScript, jQuery, Node.js, Express.js, MySQL, MongoDB, Mongoose, React.js, and more. I have experience working with diverse teams or independently to meet demanding deadlines. I am confident and capable of building fully functional MERN stack web applications from start to finish. I am passionate about continuing my education and learning new technologies, and I have the patience and research skills necessary to resolve issues independently.
            I am actively seeking intership, volunteer, or employment opportunities.</p>
        </div>
      </Col>
    <Col sm={8}>
      <div className="aboutCardRight">
        <a target="_blank" rel="noreferrer" href="https://api.badgr.io/public/assertions/tDt35IJZQT-VVtAvMjxGfA?identity__email=leanndemetro%40gmail.com"><img alt="certificate" className="certImg" src="https://i.imgur.com/ZEsoyI7.jpg"></img></a>
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