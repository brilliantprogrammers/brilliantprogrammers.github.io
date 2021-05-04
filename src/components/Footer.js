import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'

class Foot extends Component {
    render() { 
        return ( 
            <Container  fluid={true} id="footercon">
                <Row>
                <Col xs="6" sm="4">
                    <div class="col-5 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li id="navlist_"><Link className="navlink" href="/"><FontAwesomeIcon icon={faLink} />Home</Link></li>
                            <li id="navlist_"><Link className="navlink" href="/project"><FontAwesomeIcon icon={faLink} />Python</Link></li>
                            <li id="navlist_"><Link className="navlink" href="/"><FontAwesomeIcon icon={faLink} />Django</Link></li>
                            <li id="navlist_"><Link className="navlink" href="/Contact"><FontAwesomeIcon icon={faLink} />Contact Us</Link></li>
                            <li id="navlist_"><Link className="navlink" href="/About"><FontAwesomeIcon icon={faLink} />About Us</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col xs="6" sm="4">
                    <div class="address">
                        <h5>Contact</h5>
                        <address>
                            Uttar pradesh<br/>
                            India<br/>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <a className="navlinkw" href="mailto:deepanshubhai84@gmail.com">Write Article</a>
                        </address>
                    </div>
                </Col>
                <Col id="social_col" sm="4">
                    <a id="social_" class="btn btn-social-icon btn-facebook" href="https://twitter.com/imaprogramr"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                    <a id="social_" class="btn btn-social-icon btn-linkedin" href="https://www.instagram.com/ttyagi_boy84/"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>                            <a id="social_" class="btn btn-social-icon btn-youtube" href="https://www.linkedin.com/in/deepanshu-tyagi-355855198/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                    <a id="social_" class="btn btn-social-icon" href="mailto:"><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
                </Col>
                </Row>
                <Row>
                    <h1 id="copyright">&copy;2021 brilliantprogrammer<br/> All rights reserved</h1>
                </Row>
            </Container>
         );
    }
}
 
export default Foot;