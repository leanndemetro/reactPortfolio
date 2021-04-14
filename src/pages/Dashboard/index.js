import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  return (
    <div>
      <Container>
        <div className="dashDiv">
          <Row>
            <Col>ALYSSA DEMETRO
      <hr></hr></Col>
          </Row>
          <Row>
            <Col><p className="dashRowTwo">MERN STACK WEB DEVELOPER</p></Col>
          </Row>
          <Row>
            <Col><a href="/About"><button className="learnButton"><p className="learnText">LEARN MORE</p></button></a></Col>
          </Row>
        </div>
      </Container>
      <br></br>
        <br></br>
        <br></br>
      <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>




  );
}


export default Dashboard;