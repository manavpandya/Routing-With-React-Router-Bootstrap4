import React, { Component } from 'react';
import './App.css';

// ract-bootstrap components
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

// Our speperately created components
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

// To use routing functionalities
import { Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Routing With React-Router</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="javascript:void(0)">
              <Link to="/">Dashboard</Link>
            </NavItem>
            <NavItem href="javascript:void(0)">
              <Link to="/about">About Us</Link>
            </NavItem>
            <NavItem href="javascript:void(0)">
              <Link to="/contact">Contact Us</Link>
            </NavItem>
             {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown> */}
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
