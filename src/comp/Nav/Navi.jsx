import React from "react";
import Container from "react-bootstrap/Container";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../sportsvibe.png";
import "./nav.css";

function Navi() {
  return (
    <div>
      <Navbar expand="lg" className="bg-warning text-danger">
        <Container>
          <Link className="navbar-brand" to="/">
            <img src={logo} className="App-logo me-2" alt="logo" width="50px" />
            Sports Vibes
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/"><i className="fa fa-home me-1"></i>Home
              </Link>
              <Link className="nav-link" to="/news">
                News
              </Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <Link className="nav-link bg-warning" to="/cricket">
                Cricket
              </Link>
              <Link className="nav-link bg-warning" to="/football">
                Football
              </Link>
                <NavDropdown.Divider />
              <Link className="nav-link" to="/article">
                Articles
              </Link>
              </NavDropdown>
              <Link className="nav-link" to="/events">
                Events
              </Link>
              <Link className="nav-link" to="/about">
                About Us
              </Link>
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
               <Link className="nav-link" to="/user">
                Sign Up/Log In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navi;
