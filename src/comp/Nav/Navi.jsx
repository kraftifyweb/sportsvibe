import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import logo from "../../sportsvibe.png"
import './nav.css';

function Navi() {
  return (
  <div>
      <Navbar expand="lg" className="bg-warning text-danger">
      <Container>
        <Link className="navbar-brand" to="/"><img src={logo} className="App-logo me-2" alt="logo" width="50px"/>Sports Vibes</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/news">News</Link>
            <Link className="nav-link" to="/events">Events</Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navi;
