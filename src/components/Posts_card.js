 
import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Card,Button } from 'react-bootstrap'
import Back from './images/backend.jpg'
import './css/Home.css'
import load from './images/load.svg'

function Posts_card() {
    const [appState, setAppState] = useState({
        loading: true,
        repos: null,
      });
    
      useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `http://127.0.0.1:8000/blog/`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((repos) => {
            setAppState({ loading: false, repos: repos });
          });
      }, [setAppState]);
      
    return ( 
        appState.loading ? (<h3 className="loding"><img className="load" alt="loading..." src={load}/></h3>) : (
            <Container className="themed-container" key={appState.repos.id} fluid={true}>
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
        )
        
        );
}
 
export default Posts_card;