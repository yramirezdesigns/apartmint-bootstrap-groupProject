import React from "react";
import Modal from "../loginModal/loginModal";
// import Buttons from "../Button";
import {
  Form,
  Button,
  ButtonToolbar,
  ButtonGroup
  // Modal
} from "react-bootstrap";
import "./login.css";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isShowing: false
    };
  }

  showModal = () => {
    this.setState({
      isShowing: true
    });

    console.log("Hello");
  };

  hideModal = () => {
    this.setState({
      isShowing: false
    });

    console.log("Bye");
  };

  render() {
    return (
      <div>
        <ButtonToolbar>
          <ButtonGroup className="mr-2" aria-label="First group">
            <Button
              variant="info"
              className="loginBut"
              onClick={e => this.showModal()}
            >
              Login
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        {/* <Button onClickHandler={e => this.showModal()} buttonText={"Login"} /> */}
        <Modal isShowing={this.state.isShowing}>
          <div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="loginModal">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label className="loginModal">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <br />
          <ButtonToolbar>
            <ButtonGroup className="mr-2" aria-label="First group">
              <Button
                variant="info"
                className="loginBut"
                onClick={e => this.hideModal()}
                size="sm"
              >
                X
              </Button>
            </ButtonGroup>
          </ButtonToolbar>
          {/* <Buttons onClickHandler={e => this.hideModal()} buttonText={"X"} /> */}
          <br />
        </Modal>
      </div>
    );
  }
}
