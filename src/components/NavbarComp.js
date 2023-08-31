import React, { Component } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import Contact from './Contact';
import Home from './Home';
import Partners from './Partners';


export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
      <div>
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand href="/#home">E-recycling</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/partners"}>Partners</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
    <div>
    <Switch>
          <Route path="/">
           <Home/>
          </Route>
          <Route path="/partners">
           <Partners/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
    </div>
    </Router>
      );
    }
  }