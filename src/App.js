import React from 'react';
import './App.css';
import ProductCard from './ProductCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Switch, Route, BrowserRouter } from 'react-router-dom';
import About from './About.js';
import { Nav, Navbar, NavLink } from 'react-bootstrap/';
import Team from './Team.js';
import Home from './Home.js';
import Contact from './Contact.js';

function App(){

  return (
    <div>
      <BrowserRouter>
        <div>
        <Navbar bg="dark" fixed="top" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink href="/pacelab">Pacelab ACE</NavLink>
              <NavLink href="/about">About Our Company</NavLink>
              <NavLink href="/team">Team</NavLink>
              <Navbar.Brand href="/" class="nav-justified">PACE America</Navbar.Brand>
              <NavLink href="/contact">Contact Us</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/pacelab" component={ProductCard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;