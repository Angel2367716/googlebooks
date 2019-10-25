import React, { Component } from 'react';
import { Col, Row, Container } from "../../components/Grid";
// import "./Search.css";

class Search extends Component{
  return (){
    return (
      <Container fluid>
        <Row>
        <Col size="md-6">
      <div>
      Search Books Page
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

export default Search;