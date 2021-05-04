import React, { Component } from 'react'
import { Container,Row} from 'react-bootstrap'
import './css/contact.css'


class Contact extends Component {
    render() { 
        return ( 
            <div>
            <div id="contact"><div id="section"></div></div>
            <Container>
                
                <Row>
                <iframe id="iframe" src="https://kontactr.com/form-page/403a30bae74ecb0" title="description"/>
                </Row>
            </Container>
            </div>
         );
    }
}
 
export default Contact;