import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card, Form, Image } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaViber } from 'react-icons/fa';

function Footer() {
	return (
		<>
			<div id="footer" className="footer-container">
				<Container fluid>
					<Row>
						<Col md={4}>
							<Row>
							<div className="brandName">
									<Image src="images/hacker.png" className="footer-image"></Image>
							</div>	
							</Row>
							<Row>
								<div className="bible-title">
								Habakkuk 2:2-3
								</div>
							</Row>
							<Row>
								<div className="bible-verse">
								 <span className="verse-number">2</span> And the Lord answered me: Write the vision; make it plain on tablets, so he may run who reads it. 
									<span className="verse-number">3</span> For still the vision awaits its appointed time; it hasten to the end-it will not lie. 
									If it seems slow, wait for it; it will surely come; it will not delay.
								</div>
							</Row>
						</Col>
						<Col md={4}>
							<Row>
								<div className="contact-title">
									CONTACT DETAILS
								</div>
							</Row>
							<Row>
								<div className="contact-locations">
									<FaMapMarkerAlt size={25}/> 
									<div className="address-details">
										Western Bicutan, Taguig City
									</div>
								</div>
							</Row>
							<Row>
								<div className="contact-number">
									<FaPhone  size={21}/>
									<div className="contact-details">
										+63 9568198643
									</div>
								</div>
							</Row>
						</Col>	
						<Col md={3}>
							<Row>
								<div className="social-media">
									SOCIAL MEDIA
								</div>
							</Row>
							<Row>
								<div className="socila-media-icons">
									<a href="https://www.facebook.com/wenkz19" className="facebook" target="_blank">
										<FaFacebook size={30}/>
									</a>
									<a href="wa.link/e2czur" className="whatsup" target="_blank">
										<FaWhatsapp size={33}/>
									</a>
									<a href="https://msng.link/o/?639568198643=vi" className="viber" target="_blank">
										<FaViber size={30}/>
									</a>
								</div>		
							</Row>
						</Col>
	
					</Row>
				</Container>	
			</div>
		</>
	)
}

export default Footer
