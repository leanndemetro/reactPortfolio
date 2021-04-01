import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-bootstrap";


function Portfolio() {
  return (
    <Container>
    <Row>
    <Col sm={2}>
       </Col>
      <Col sm={8}>
   <span className="TITLE">
    Portfolio.
     </span>
    </Col>
    <Col sm={2}>
       </Col>
   </Row>
   <Row>
     <Col>
     <hr></hr></Col>
   </Row>
   <Row>
   <Col sm={6}>
       <div className="portCardLeft">
       <a rel="noreferrer" target="_blank" className="certImg" href="https://github.com/bridgetrshannon/Assist"><img alt="compostInc" className="portImgTwo" src="https://i.imgur.com/2iWmNiv.jpg"></img></a> </div>
     </Col>
     <Col sm={6}>
       <div className="portCardLeft">
         <a rel="noreferrer" target="_blank" className="certImg" href="https://github.com/AnthonnyMitch/Growth"><img alt="budgetTracker" className="portImg" src="https://i.imgur.com/Jyh0FvD.jpg"></img></a> </div>
     </Col>
   </Row>
   <Row>
   <Col sm={6}>
       <div className="portCardLeft">
       <a rel="noreferrer" target="_blank" className="certImg" href="https://compost-incorp.herokuapp.com/"><img alt="compostInc" className="portImg" src="https://i.imgur.com/IaEVHCT.jpg"></img></a> </div>
     </Col>
     <Col sm={6}>
       <div className="portCardLeft">
         <a rel="noreferrer" target="_blank" className="certImg" href="https://murmuring-meadow-11462.herokuapp.com/"><img alt="budgetTracker" className="portImgTwo" src="https://i.imgur.com/YxrUmX9.jpg"></img></a> </div>
     </Col>
   </Row>
   <Row>
   <Col sm={6}>
       <div className="portCardLeft">
       <a rel="noreferrer" target="_blank" className="certImg" href="https://leanndemetro.github.io/workDayScheduler/"><img alt="eatDaBurger" className="portImg" src="https://i.imgur.com/g3L1WV7.jpg"></img></a> </div>
     </Col>
     <Col sm={6}>
     <div className="portCardLeft">
     <a  rel="noreferrer" target="_blank" className="certImg" href="https://safe-brook-64265.herokuapp.com/"><img alt="workoutTracker" className="portImgFour" src="https://i.imgur.com/N6pvHyv.jpg"></img></a>
      </div>
       </Col>
   </Row>
   <Row>
   <br></br></Row>
   <hr></hr>
   <br></br>
   </Container>

  );
}


export default Portfolio;