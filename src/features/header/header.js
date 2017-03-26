// @flow
import React, { Component } from 'react';
import './header.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import FA from 'react-fontawesome';
import { BrowserRouter as Router, Link } from 'react-router-dom'

class Header extends Component {
render() {
    return (
	<Navbar inverse collapseOnSelect>
    		<Navbar.Header>
      			<Navbar.Brand>
				<Link to={'/'}> <FA name="home" size="2x" /> </Link>
      			</Navbar.Brand>
      			<Navbar.Toggle />
    		</Navbar.Header>
    		<Navbar.Collapse>
			<Nav>
				<Link to={'/shop'}>
					<NavItem eventKey={1} href="#" className="link-disabled"><FA name="shopping-basket" className="menu-item-icon" />Ma liste de course</NavItem>
				</Link>
			</Nav>
    		</Navbar.Collapse>
  	</Navbar>
    );
  }
}

export default Header;
