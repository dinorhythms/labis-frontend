import React, { useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './styles/header.css';

const Header = () => {

	useEffect(() => {
		const handleScroll = () => {
			const nv = document.querySelector('nav');
			if(window.scrollY > 150){
				nv.classList.add('scrolled');
				return;
			}
			nv.classList.remove('scrolled');
		}
		window.addEventListener('scroll', handleScroll);
	}, [])



	return (
		<Navbar collapseOnSelect className="topbar" id="navbar" expand="lg" variant="dark" fixed="top">
		<Navbar.Brand className="brand" href="#home">Labis<span>Tv</span></Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="ml-auto">
				<Button variant="danger">Sign In</Button>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}

export default Header;
