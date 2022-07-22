import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group-1329.png';
import './Navigation.css';

const Navigation = () => {
  return (
    <div>
      <Navbar bg="transparent" expand="lg">
        <Container>
      <Navbar.Brand as={Link} to="/home"> <img src={logo} className='logo-img' alt="" /> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='me-4 fw-bold text-center' as={Link} to="/home">Home</Nav.Link>
              <Nav.Link className='me-4 fw-bold text-center' as={Link} to="/donation">Donation</Nav.Link>
              <Nav.Link className='me-4 fw-bold text-center' as={Link} to="/event">Events</Nav.Link>
              <Nav.Link className='me-4 fw-bold text-center' as={Link} to="/blog">Blogs</Nav.Link>
              <Nav.Link className='me-4 px-4 btn btn-primary text-light mt-lg-0 mt-md-3 mt-sm-2 mt-3'  as={Link} to="/register">Register</Nav.Link>
              <Nav.Link className='me-4 px-4 btn btn-dark text-light mt-lg-0 mt-md-3 mt-sm-2 mt-3' as={Link} to="/admin">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;