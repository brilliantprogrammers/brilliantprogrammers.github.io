 
import React, { Component } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './images/work.svg'
import './css/Home.css'
import Posts_card from './Posts_card'
import {Helmet} from "react-helmet";
class Home extends Component {
    render() { 
        return ( 
            <Container className="themed-container" fluid={true}>
                <Helmet>
                    <title>Brilliant programmer</title>
                    <meta name="description" content="Brilliant programmer Coding interview Python Javascript" />
                </Helmet>

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
                < Posts_card />
            </Container>
         );
    }
}
 
export default Home;