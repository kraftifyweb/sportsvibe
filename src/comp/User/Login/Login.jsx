import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

function Login() {
  const [show, setShow] = useState(false);
  const getValue = (e) => {
        let input = e.target;
        if(input.type === "file")
        {
            console.log(input.files[0].value)
        }
        else{
            console.log(input.value)
        }
    }
  return (
    <div>
      <Container>
        <h1 className="my-5">
          If you alredy have an account <br />
          <Button onClick={() => setShow(true)}>
            <i className="fa fa fa-sign-in me-1"></i>Log-In
          </Button>
        </h1>
        <Modal show={show}>
          <Modal.Header closeButton onClick={() => setShow(false)}>
            <Modal.Title>User Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email" onChange={getValue} 
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password" onChange={getValue} 
                  required
                />
              </Form.Group>
            </Form>
            <br />
            <Button>Log In</Button> &nbsp;<Button>Reset</Button>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Login;
