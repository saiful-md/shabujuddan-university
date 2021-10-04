import React from 'react';
import { Nav } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
	return (
		<div className="bg-primary text-white py-4">
			{/* left side of  footer  */}
			<div className="shabuj-footer">
				<div>
					<h3>ShobujUddan University</h3>
					<p>Saignboard, Board-Bazar, Gazipur sadar </p>
					<p>post code: Gazipur-1704</p>
				</div>
				{/* right side of the footer  */}
				<div>
					<Nav className="flex-column">
						<Nav.Link className="text-white" href="/home">
							Home
						</Nav.Link>
						<Nav.Link className="text-white" href="/about">
							About
						</Nav.Link>
						<Nav.Link className="text-white" href="/services">
							Services
						</Nav.Link>
						<Nav.Link className="text-white" href="/contact">
							Contact
						</Nav.Link>
					</Nav>
				</div>
			</div>
			<p className="text-center">Copyright &copy; ShabujUddan University</p>
		</div>
	);
};

export default Footer;
