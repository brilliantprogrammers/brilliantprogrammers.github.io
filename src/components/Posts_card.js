import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './css/Home.css'
import load from './images/load.svg'


function Posts_card() {
    const [appState, setAppState] = useState({
        loading: true,
        repos: null,
      });
    
      useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://brillianttyagi.pythonanywhere.com/blog/`;
        fetch(apiUrl)
          .then((res) => res.json())
          .then((repos) => {
            setAppState({ loading: false, repos: repos });
          });
      }, [setAppState]);
      
    return ( 
        appState.loading ? (<h3 className="loding"><img className="load" alt="loading..." src={load}/></h3>) : (
            <Container className="themed-container" key={appState.repos.slug} fluid={true}>
                <Row  xs="1" sm="2" md="4">
                    { appState.repos.map( (info) =>(
                        <Col id="posts">
                            <Card id="posts_card">
                                <div id="img__"><Card.Img id="img_posts" variant="top" src={"https://brillianttyagi.pythonanywhere.com/"+info.image} /></div>
                                <Card.Body>
                                    <Card.Title>{info.title}</Card.Title>
                                    <Card.Text>
                                    {info.text}
                                        
                                    </Card.Text>
                                    <Card.Link><Link to={"/blog/" + info.slug.toString()}>Read More</Link></Card.Link>
                                </Card.Body>
                            </Card>
                            
                        </Col>
                    ) )
                    }
                </Row>
                
            </Container>


            )
        )
        
}
 
export default Posts_card;
