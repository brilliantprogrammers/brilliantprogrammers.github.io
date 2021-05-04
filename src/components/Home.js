 
import React, { Component } from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './images/work.svg'
import Back from './images/backend.jpg'
import './css/Home.css'
class Home extends Component {
    render() { 
        return ( 
            <Container className="themed-container" fluid={true}>

                <Row>
                    <Col className="p-2">
                        <div className="col-lg-6 col-md-5 col-sm-12 pt-5 align-self-center mb-lg-5 ps-5">
                            <h1 className="display-3 fw-lighter" id="heading-1">Learn<br/> Programming</h1>
                            <p id="change-text" className=" display-5 fw-light fs-4 fw-light mt-lg-3">#Learn #Practice #Change</p>
                        </div>
                    </Col>
                    <Col className="sm-5 lg-6 7 p-4"><Col className=" wrapper mt-3 text-center"><img id="img1" src={ Work } alt="Programming guy"/></Col></Col>
                </Row>
                <Row id="new">
                    <Col>
                        <h1 className="quote">
                        <i>"It has become appallingly obvious that our technology has exceeded our humanity."

                        <br/>~ Albert Einstein</i>
                        </h1>
                        <button id="learn" >
                            <a className="Link_" href="ok">Start Learning</a> 
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </Col>
                </Row>
                <Row>
                    <h1 id="recent">Recent Posts</h1>
                </Row>
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
 
export default Home;