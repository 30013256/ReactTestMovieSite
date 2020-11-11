import React from 'react';
import Logo from '../logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
 

export default function Header() {
    return (
        <header className="bg-info">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={Logo}                          
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' '}React Bootstrap
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/movielist">Movie List</Nav.Link>
                        </Nav>    
                    </Navbar.Collapse>                  
                </Container>                 
            </Navbar>                  
        </header>
    )
}




