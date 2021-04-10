import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Image } from 'react-bootstrap';
import './Home.css';
 import { NavHashLink as Link } from 'react-router-hash-link';


function Home() {
	return (
		<>
<Navbar id="home" collapseOnSelect expand="lg" className="navbar-container">
  <Navbar.Brand ><Link spy={true} smooth={true} offset={-70} duration={1000} to="/#header-me" activeClassName="selected"><Image src="images/hacker.png"  width="45"
        height="45"></Image></Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse>
    <Nav className="ml-auto">
      <Link activeClass="active" className="nav-link" spy={true} smooth={true} offset={-70} duration={1000} to="/#header-me" activeClassName="selected">Home</Link>
      <Link activeClass="active" className="nav-link" spy={true} smooth={true} offset={-70} duration={1000} to="/#about-me" activeClassName="selected"> About</Link>
	  <Link activeClass="active" className="nav-link" spy={true} smooth={true} offset={-70} duration={1000} to="/#projects" activeClassName="selected"> Projects</Link>
	  <Link activeClass="active" className="nav-link" spy={true} smooth={true} offset={-70} duration={1000} to="/#contact-me" activeClassName="selected">Contacts</Link>	
    </Nav>
  </Navbar.Collapse>
</Navbar>
	
		</>
	);
}

export default Home
