import React from "react";
import "./cont.css";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Cont() {
  return (
    <div className="cont">
      <Container>
        <Row>
          <Col className="md">
            <Form className="py-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col className="md">
            <h1>Intageam</h1>
            <h1>address sjdnkas s dcjsa d sd as dn acs dj s s csjd as </h1>
          </Col>
          <Col className="md">
            <h1>Facebook</h1>
            <h1>address</h1>
          </Col>
          <Col className="md">
            <h1>Twitter</h1>
            <h1>address</h1>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col className="md">
            <h1>Contact Address</h1>
            <h3>
              Siddhanath Basic School Hattithala 1 Bedkot Nagarpalika 
            </h3>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col className="md">
            <h1>Map</h1>
            <h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13962.861885400407!2d80.32311274030596!3d28.9661625895026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1a590a935ef09%3A0x40cdef5463ec4dd9!2sSiddhanath%20Basic%20School%20Hattithala%201%20Bedkot%20Nagarpalika!5e0!3m2!1sen!2sin!4v1772958456771!5m2!1sen!2sin"
                min-width="300px"
                height="auto"
                allowfullscreen=""
                loading="lazy"
                title="addressmap"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cont;
