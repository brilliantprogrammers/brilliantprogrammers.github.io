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
                <Nav.Link ><Link to="/tags/python" id="navlinkh">Python</Link></Nav.Link>
                <Nav.Link ><Link to="/tags/bigdata" id="navlinkh">Big Data</Link></Nav.Link>
                <NavDropdown className="navlinkh" title="Topics" id="basic-nav-dropdown">
                  <NavDropdown.Item id="navlinkh" href="#action/3.1"><Link to="/tags/django" id="navlinkh">Django</Link></NavDropdown.Item>
                  <NavDropdown.Item id="navlinkh" href="#action/3.2"><Link to="/tags/web_development" id="navlinkh">Web Development</Link></NavDropdown.Item>
                  <NavDropdown.Item id="navlinkh" href="#action/3.3"><Link to="/tags/react" id="navlinkh">React</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item id="navlinkh" href="#action/3.4"><Link to="/tags/tech" id="navlinkh">Tech</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link to="/"><Link to="/write" id="navlinkk">Write</Link></Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
        )
    }
}
 
export default Navb;