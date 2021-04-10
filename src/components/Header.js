import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Container, Jumbotron, Button, Row, Col } from 'react-bootstrap';
import Typewritter from 'typewriter-effect';


function Header() {
	return (
		<Jumbotron id="header-me">
		<Row>
			<Col md={12}>	
			<div className="text-name">
				<Typewritter options={{
					strings: ['Hello!', "I'm Kevin a Web Programmer", 'Feel free to Explore my Webiste', 'Thank You!'],
					autoStart: true,
					loop: true,
					pauseFor: 5000,
				}}
					
				/>
			</div>
			</Col>
		</Row>
		<Row>
			<Col md={12}>
				<div className="button-align">
				<Button variant="danger">START NOW</Button>	
				</div>	
			</Col>
		</Row>
		
		</Jumbotron>
	)
}

export default Header
