import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

function Reg() {
    const [show, setShow]=useState(false)
    const getValue = (e) => {
        let input = e.target;
        let val;
        if(input.type ==="file")
        {
            console.log(input.files[0].name)
            val=input.value;
        }
        else{
            console.log(input.value)
             val=input.value;
        }
        document.getElementById('p').innerHTML=val;
    }
  return (
    <div>
      <Container>
        <h1 className="my-5">
          Are you new visitor ?
          <br />
          <Button onClick={()=>setShow(true)}>
            <i className="fa fa-user-plus me-1"></i>Register
          </Button>
          <p id='p'></p>
        </h1>
        <Modal show={show}>
          <Modal.Header closeButton onClick={()=>setShow(false)}>
            <Modal.Title>New User Registration</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>User Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Enter your full name" onChange={getValue} required />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter your password" onChange={getValue} required/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Number</Form.Label>
                <Form.Control type="tel" name="number" placeholder="Enter your number" onChange={getValue} required/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" onChange={getValue} required/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" name="pic" placeholder="Upload an image" onChange={getValue} required/>
              </Form.Group>
            </Form>
            <br />
            <Button>Register</Button> &nbsp;<Button>Reset</Button>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Reg;
