import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    return (
        <div className="header-part">
           <Navbar bg="dark" variant="dark">
                <Container className="d-flex">
                    <h1 className="text-white">S U</h1>
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/About">About us</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;