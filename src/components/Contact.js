import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card, Form, Image } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Contact() {
	function sendEmail(e){
		 e.preventDefault();
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
})
    emailjs.sendForm('service_x4z2so5', 'template_2p3kybj', e.target,'user_f4RAxq5FqbNOqBry0kT37')
      .then((result) => {
        //   console.log(result.text);
		Toast.fire({
  			icon: 'success',
  			title: 'Email Sent Success'
		})
      }, (error) => {
         Toast.fire({
  			icon: 'error',
  			title: 'Email Not Sent'
		})
      });
	e.target.reset();
	}

	return (
		<>
			<div id="contact-me" className="contact-container">
				<Container fluid="md" className="container-md">
				<Row className="justify-content-center">
					<Col md={6}>
						<div className="text-contact"><h1>CONTACT ME</h1></div>
					</Col>	
				</Row>
				
				<Row className="justify-content-center">
				{/* <Col md={{ span:4, offset:1}}>
					<Image className="image-size" src="images/paper-plane.png" rounded/>
				</Col>		 */}
				<Col md={{span:6, offset:3}}>
				<Form onSubmit={sendEmail}>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter Name" name="name"/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter Email" name="email"/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Subject</Form.Label>
						<Form.Control type="text" placeholder="Enter Subject" name="subject"/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Message</Form.Label>
						<Form.Control as="textarea" placeholder="Enter Message" name="message"/>
					</Form.Group>
					<div className="button-align">
						<input type="submit" className="btn btn-danger" value="Send Message"></input>
					</div>
				</Form>
				</Col>
				<Col></Col>
				</Row>
				</Container>
			</div>	
		</>
	)
}

export default Contact
