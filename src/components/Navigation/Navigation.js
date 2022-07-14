import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../images/logos/Group-1329.png';
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Container>
      <Navbar.Brand href="#home"> <img src={logo} className='logo-img' alt="" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;