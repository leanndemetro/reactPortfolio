import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";
import { FaLongArrowAltRight } from 'react-icons/fa';




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
  <Row className="aboutDiv">
    <Col sm={1}></Col>
  <Col sm={10}>
  <img className="resumeImg" src="https://i.imgur.com/AxDPOuY.jpg"></img>
      </Col>
  <Col sm={1}></Col>
  </Row>
  <br></br>
  <Row>
    <Col sm={5}></Col>
    <Col sm={2}>
      <a href="https://www.linkedin.com/in/alyssa-de-metro-59abba1b0/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADFMxcYB0XJ1lHN-GVVtohMQbcYjdf0W4pc,1635453343679)/"><button className="viewResBtn">VIEW FULL RESUME</button></a>
    </Col>
    <Col sm={5}></Col>
  </Row>
  <hr></hr>
  <Row className="aboutDiv">
    <Col sm={1}></Col>
  <Col sm={10}>
  <img className="certImg" src="https://i.imgur.com/ZEsoyI7.jpg"></img>
      </Col>
  <Col sm={1}></Col>
  </Row>
  <hr></hr>
  <br></br>
  </Container>
 
     
  
   
  );
}


export default About;