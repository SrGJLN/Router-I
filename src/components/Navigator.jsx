import React from 'react'
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigator = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
    <Link to="/" className="text-dark ms-3 text-decoration-none">Home</Link>
    <Link to="/contact" className="text-dark ms-3 text-decoration-none">Contacto</Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='text-danger'>
          <p>Happy Cake</p>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>


  )
}

export default Navigator