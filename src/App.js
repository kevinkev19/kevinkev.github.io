import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <>
		<Router>
		
      		<Home/>
			<Header/>
			<About/>
			<Project/>
			<Contact/>
			<Footer/>
			<Switch>
			</Switch>
		</Router>
    </>
  );
}

export default App;
