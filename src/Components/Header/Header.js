import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div className="header-part">
			<Navbar bg="dark" variant="dark">
				<Container className="d-flex">
					{/* header logo  */}

					<h1 className="text-white logo">
						<span className="logo-s">S</span>
						<span className="logo-u">U</span>
					</h1>

					{/* header link  */}
					<Nav className="">
						<NavLink
							className="text-decoration-none mx-2 text-white"
							activeStyle={{
								fontWeight: 'bold',
								color: 'cyan'
							}}
							to="/home"
						>
							Home
						</NavLink>
						<NavLink
							className="text-decoration-none mx-2 text-white"
							activeStyle={{
								fontWeight: 'bold',
								color: 'cyan'
							}}
							to="/About"
						>
							About us
						</NavLink>
						<NavLink
							className="text-decoration-none mx-2 text-white"
							activeStyle={{
								fontWeight: 'bold',
								color: 'cyan'
							}}
							to="/services"
						>
							Services
						</NavLink>
						<NavLink
							className="text-decoration-none mx-2 text-white"
							activeStyle={{
								fontWeight: 'bold',
								color: 'tomato'
							}}
							to="/contact"
						>
							Contact
						</NavLink>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
