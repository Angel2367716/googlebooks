import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
// import "./Saved.css";

class Saved extends Component{
  return (){
    return (
      <Container fluid>
        <Row>
        <Col size="md-6">
      <div>
      Saved Books Page
      </div>
        </Col>
        <Col size="md-6">
          <div>Books Read</div>
        </Col>
        </Row>
      </Container>
      );
    }
}

export default Saved;