import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./img/logo.jpeg"
function Nav_page() {
  return (
    <div className='fixed'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='sticky'>
        <Navbar.Brand href="/"><img className='headerLogo' src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/iso-partnerships">ISO Partnership</Nav.Link>
            <NavDropdown title="Forms" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/form">Apply for a Cash Advance</NavDropdown.Item>
              <NavDropdown.Item href="/iso-partnerships">
                Become a Partner
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}


export default Nav_page;