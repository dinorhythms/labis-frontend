import React, { useEffect } from 'react';
import { Nav, Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './styles/header.css';

const PrivateHeader = () => {

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
			<Navbar.Brand className="brand" as={Link} to="/">Labis<span>Tv</span></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav.Link as={NavLink} to="/movies">Movies</Nav.Link>
				<Nav.Link as={NavLink} to="/series">Series</Nav.Link>
				<Nav className="ml-auto">
					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					</Form>
					<ul className="d-none d-sm-block navbar-nav navbar-nav-right">
                <li className="nav-item nav-profile border-0">
                  <Dropdown alignRight>
                    <Dropdown.Toggle className="nav-link count-indicator bg-transparent border-0">
											<FontAwesomeIcon color="white" icon={faUserCircle} size="2x" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="preview-list navbar-dropdown pb-3 pt-3">
                      <Dropdown.Item as={Link} to="/" eventKey="link-1" className="dropdown-item preview-item d-flex align-items-center text-small">
                        Manage Account
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/" eventKey="link-1" className="dropdown-item preview-item d-flex align-items-center text-small">
                        Change Password
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/" eventKey="link-1" className="dropdown-item preview-item d-flex align-items-center text-small">
                        Transactions
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="/" eventKey="link-1" className="dropdown-item preview-item d-flex align-items-center text-small">
                        Sign Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
					{/* <Button as={Link} to="/browse" variant="danger">Sign Out</Button> */}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default PrivateHeader;
