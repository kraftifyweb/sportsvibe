import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


function Navi() {
  return (
    <div>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me-auto' >
                            <Navbar.Link href="/">Home</Navbar.Link>
                            <Navbar.Link href="/news">News</Navbar.Link>
                            <Navbar.Link href="/events">Events</Navbar.Link>
                            <Navbar.Link href="/contact">Contact Us</Navbar.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar.Toggle>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navi