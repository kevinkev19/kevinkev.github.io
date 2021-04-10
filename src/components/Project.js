import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

function Project() {
	return (
		<>
			<div id="projects" className="container-project">
				<Container fluid="md">
					<Row className="justify-content-center">
						<Col md={6}>
								<div className="project-text">
									<h1>PROJECTS</h1>
								</div>
						</Col>
					</Row>
				
					<Row>
						<Col md={4}>
							<Card className="bg-dark text-white">
								<Card.Img variant="top" src='images/new-hack.jpg' />
								<Card.Body>
									<Card.Title>Hotel Managemet System</Card.Title>
									<Card.Text>ddsadsadasdasdkasdaskdajssdasd</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={4}>
							<Card className="bg-dark text-white">
								<Card.Img variant="top" src='images/new-hack.jpg' />
								<Card.Body>
									<Card.Title>School Management System</Card.Title>
									<Card.Text>ddsadsadasdasdkasdaskdajssdasd</Card.Text>
								</Card.Body>
							</Card>

						</Col>
						<Col md={4}>
							<Card className="bg-dark text-white">
								<Card.Img variant="top" src='images/new-hack.jpg' />
								<Card.Body>
									<Card.Title>POS System</Card.Title>
									<Card.Text>ddsadsadasdasdkasdaskdajssdasd</Card.Text>
								</Card.Body>
							</Card>
						</Col>

					</Row>
					<Row>
						<Col md={4}>
							<Card className="bg-dark text-white">
								<Card.Img variant="top" src='images/new-hack.jpg' />
								<Card.Body>
									<Card.Title>KTV System</Card.Title>
									<Card.Text>ddsadsadasdasdkasdaskdajssdasd</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={4}>
							<Card className="bg-dark text-white">
								<Card.Img variant="top" src='images/new-hack.jpg' />
								<Card.Body>
									<Card.Title>Clinic Management System</Card.Title>
									<Card.Text>ddsadsadasdasdkasdaskdajssdasd</Card.Text>
								</Card.Body>
							</Card>

						</Col>
						<Col md={4}>
							<Card className="bg-dark text-white">
								<Card.Img variant="top" src='images/new-hack.jpg' />
								<Card.Body>
									<Card.Title>Riddle App</Card.Title>
									<Card.Text>ddsadsadasdasdkasdaskdajssdasd</Card.Text>
								</Card.Body>
							</Card>
						</Col>

					</Row>
				</Container>
			</div>	
		</>
	)
}

export default Project
