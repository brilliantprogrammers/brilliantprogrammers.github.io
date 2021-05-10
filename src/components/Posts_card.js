 
import React, { Component } from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import Back from './images/backend.jpg'
import './css/Home.css'

class Posts_card extends Component {
    render() { 
        return ( 
            <Container className="themed-container" fluid={true}>
                <Row  xs="1" sm="2" md="4">
                <Col id="posts">
                        <Card >
                            <div id="img__"><Card.Img id="img_posts" variant="top" src={Back} /></div>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button id="read_btn" variant="danger">Read More</Button>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    
                    
                    
                </Row>
            </Container>
         );
    }
}
 
export default Posts_card;