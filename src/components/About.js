import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { Container, Jumbotron, Button, Row, Col, Image, OverlayTrigger,Popover } from 'react-bootstrap';

function About() {
	return (
		<>
			<div id="about-me" className="about-container">
				<Container fluid="lg">
					<Row className="justify-content-center">
						<Col md={6}>
						<div className="skill-text">
						<h1>ABOUT ME</h1>
						</div>
						</Col>
					</Row>
					<br/>
					<Row className="">
						<Col md={4}>
							<Image className="image-size" src="images/web-development.png" rounded/>
						</Col>
						<Col md={5}>
							<p><span>&nbsp;&nbsp;&nbsp;</span>I’m Kevin, a web programmer from a private company. We used a PHP-OOP, Javascript and AJAX, my job as a web programmer was creating functions, creating web pages, fixing existing code, debug the functions, test manually the codes, creating migration scripts for the update to the client. In our company I also do technical support on our ktv systems so I have a background using a linux operating system.
							</p>
							<p><span>&nbsp;&nbsp;&nbsp;</span>One of my weaknesses is on front-end development because I don’t look good on color combinations. To enhance my front-end skills I built this portfolio website using ReactJS. I choose this profession because I love to build web applications and systems.</p>
						</Col>
					</Row>
					<br/>
					<Row>
						<Col md={6}>
							<div className="tech-name">
								<h3>Technologies that I used:</h3>
							</div>
							<div className="image-tech">
								<OverlayTrigger placement="top" delay={{ show:250, hide:400}}
								overlay={
									 <Popover id="popover-basic">
    								 <Popover.Title as="h3">Visual Studio Code</Popover.Title>
    								 <Popover.Content>
      									Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.
    								 </Popover.Content>
  									 </Popover>}>
								<Image className="tech-size" src="images/vscode.png" rounded></Image>
								</OverlayTrigger>	

								<OverlayTrigger placement="top" delay={{show:250, hide:400}}
								 overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">PHPStrom</Popover.Title>
    								 <Popover.Content>
      									PhpStorm provides an editor for PHP, HTML and JavaScript with on-the-fly code analysis, error prevention and automated refactorings for PHP and JavaScript code.
    								 </Popover.Content>
  									 </Popover>}>		
								<Image className="tech-size" src="images/phpstorm.png" rounded></Image>
								</OverlayTrigger>
								
								<OverlayTrigger placement="top" delay={{show:250, hide:400}}
									overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">Bitbucket</Popover.Title>
    								 <Popover.Content>
      									Bitbucket is a web-based version control repository hosting service owned by Atlassian, for source code and development projects that use either Mercurial or Git revision control systems.
    								 </Popover.Content>
  									 </Popover>}
								>
								<Image className="tech-size" src="images/bitbucket.png" rounded></Image>
								</OverlayTrigger>
								 
								<OverlayTrigger placement="top" delay={{show:250, hide:400}}
									overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">Git</Popover.Title>
    								 <Popover.Content>
      									Git is a distributed version-control system for tracking changes in any set of files, originally designed for coordinating work among programmers cooperating on source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.
    								 </Popover.Content>
  									 </Popover>

									}>
								 
								<Image className="tech-size" src="images/git1.png" rounded></Image>
								</OverlayTrigger>
							</div>
						</Col>
					
						<Col md={6}>
								<div className="tech-name">
								<h3>Skills that I have:</h3>
							</div>
							<div className="image-tech">
								<OverlayTrigger placement="top" delay={{show:250, hide:400}}
									overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">PHP</Popover.Title>
    								 <Popover.Content>
      									PHP is a popular general-purpose scripting language that is especially suited to web development.
    								 </Popover.Content>
  									 </Popover>}>				
									<Image className="tech-size" src="images/php.png" rounded></Image>
								</OverlayTrigger>
								
								<OverlayTrigger placement="top" delay={{show:250, hide:400}}
									overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">CSS</Popover.Title>
    								 <Popover.Content>
      									Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
    								 </Popover.Content>
  									 </Popover>}>
								<Image className="tech-size" src="images/css.png" rounded></Image>
								</OverlayTrigger>

								<OverlayTrigger placement="top" delay={{show:250, hide:400}}
									overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">MySQL</Popover.Title>
    								 <Popover.Content>
      									MySQL has stand-alone clients that allow users to interact directly with a MySQL database using SQL, but more often MySQL is used with other programs to implement applications that need relational database capability. 
    								 </Popover.Content>
  									 </Popover>}>
								<Image className="tech-size" src="images/mysql.png" rounded></Image>
								</OverlayTrigger>

								<OverlayTrigger placement="top" delay={{show:250, hide:400}}
									overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">HTML</Popover.Title>
    								 <Popover.Content>
      									Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. 
    								 </Popover.Content>
  									 </Popover>}>
								<Image className="tech-size" src="images/html2.png" rounded></Image>
								</OverlayTrigger>

								<OverlayTrigger placement="top" delay={{show:250, hide:400}}
									overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">Javascript</Popover.Title>
    								 <Popover.Content>
      									JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
    								 </Popover.Content>
  									 </Popover>}>
								<Image className="tech-size" src="images/javascript2.png" rounded></Image>
								</OverlayTrigger>
	
								<OverlayTrigger placement="top" delay={{show:250, hide:400}}
									overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">CodeIgniter</Popover.Title>
    								 <Popover.Content>
      									CodeIgniter is an open-source software rapid development web framework, for use in building dynamic web sites with PHP.
    								 </Popover.Content>
  									 </Popover>}>
									<Image className="tech-size" src="images/codeigniter.png" rounded></Image>
								</OverlayTrigger>
								
								<OverlayTrigger placement="top" delay={{show:250, hide:400}}
									overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">ReactJS</Popover.Title>
    								 <Popover.Content>
      									React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.
    								 </Popover.Content>
  									 </Popover>}>
									<Image className="tech-size" src="images/react2.png" rounded></Image>
								</OverlayTrigger> 
								
								 <OverlayTrigger placement="top" delay={{show:250, hide:400}}
									 overlay={<Popover id="popover-basic">
    								 <Popover.Title as="h3">Laravel</Popover.Title>
    								 <Popover.Content>
      									Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.
    								 </Popover.Content>
  									 </Popover>}>
									 	<Image className="tech-size" src="images/laravel3.png" rounded></Image>
								 </OverlayTrigger>
							
							</div>

						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}

export default About
