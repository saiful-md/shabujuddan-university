import React from 'react';
import { Nav } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-primary text-white p-4">
           <div className="shabuj-footer">
                <div>
                    <h3>ShobujUddan University</h3>
                    <p>Saignboard, Board-Bazar, Gazipur sadar </p>
                    <p>post code: Gazipur-1704</p>
                    
                </div>
                <div>
                    <Nav className="flex-column">
                        <Nav.Link  className="text-white" href="#home">Home</Nav.Link>
                        <Nav.Link  className="text-white" href="#features">About us</Nav.Link>
                        <Nav.Link  className="text-white" href="#pricing">Services</Nav.Link>
                        <Nav.Link  className="text-white" href="#pricing">Contact</Nav.Link>
                    </Nav>
                </div>
           </div>
           <p className="text-center">Copyright &copy; ShabujUddan University</p>
        </div>
    );
};

export default Footer;