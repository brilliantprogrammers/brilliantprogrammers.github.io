import React, { Component } from 'react'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Logo from './images/logo.png'

class Navb extends Component {

    render() { 
        return (
            <Navbar sticky="top" className="nav_bp" bg="light" expand="lg">
            <Navbar.Brand href="#home"><img height="40px" src={ Logo } alt="Brilliantprogrammer"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
                <Nav.Link ><Link to="/" id="navlinkh">Home</Link></Nav.Link>
                <Nav.Link ><Link to="/python" id="navlinkh">Python</Link></Nav.Link>
                <Nav.Link ><Link to="/bigdata" id="navlinkh">Big Data</Link></Nav.Link>
                <NavDropdown className="navlinkh" title="Topics" id="basic-nav-dropdown">
                  <NavDropdown.Item id="navlinkh" href="#action/3.1">Django</NavDropdown.Item>
                  <NavDropdown.Item id="navlinkh" href="#action/3.2">Web Development</NavDropdown.Item>
                  <NavDropdown.Item id="navlinkh" href="#action/3.3">React</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item id="navlinkh" href="#action/3.4">Tech</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link to="/"><Link to="/write" id="navlinkk">Write</Link></Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search Category" className="mr-sm-2" />
                <Button variant="outline-danger">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        )
    }
}
 
export default Navb;