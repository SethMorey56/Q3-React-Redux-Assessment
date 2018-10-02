import React, { Component } from 'react';
import './App.css';
import NavBarHeader from './components/NavBarHeader';
import CameraList from './components/CameraList';
import Cart from './components/Cart';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarHeader/>
        <Container fluid>
          <Row>
            <Col>
              <CameraList/>
            </Col>
            <Col>
              <Cart/>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;