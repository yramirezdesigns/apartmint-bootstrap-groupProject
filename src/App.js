import React from "react";
import logo from "./ApartmintLogoSmall.png";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container>
          <Row>
            <Col xs={4} />
            <Col xs={2}>
              <Login />
            </Col>
            <Col xs={4}>
              <Register />
            </Col>
            <Col xs={2} />
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
