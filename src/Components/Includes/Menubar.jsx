import React from 'react'
import { Container, Navbar, Image, Nav } from 'react-bootstrap'
import Logo from '../../images/logo1.png'

const Menubar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
      id="navbar"
      className="shadow-sm sticky-top bg-white"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} className="img-fluid" alt="" />
        </Navbar.Brand>
        {/* <Nav.Link
          className="btn-sm btn-primary text-white d-block d-md-none"
          href="tel:07003395709"
        ><i className="fa fa-phone-volume"></i> 70033 95709
        </Nav.Link> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto"> 
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/enquiry">Enquiry</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="btn-sm btn-primary text-white rounded-circle p-5"
              href="tel:07003395709"
            ><i className="fa fa-phone-volume"></i> Book Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Menubar