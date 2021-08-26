import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './css/Home.css'
import load from './images/load.svg'


function Tags(props) {
    const [appState, setAppState] = useState({
        loading: true,
        repos: null,
      });
    
      useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://brillianttyagi.pythonanywhere.com/tags/`+props.match.params.slug.toString();
        fetch(apiUrl)
          .then((res) => res.json())
          .then((repos) => {
            setAppState({ loading: false, repos: repos });
          });
      }, []);
      
    return ( 
        appState.loading ? (<h3 className="loding"><img className="load" alt="loading..." src={load}/></h3>) : (
            <Container className="themed-container" key={appState.repos.slug} fluid={true}>
                <h1 id="recent">Recent Posts for {props.match.params.slug.toString()}</h1>
                <Row  xs="1" sm="2" md="4">
                    { appState.repos.map( (info) =>(
                        <Col id="posts">
                            <Card id="posts_card">
                                <div id="img__"><Card.Img id="img_posts" variant="top" src={"https://brillianttyagi.pythonanywhere.com"+info.image} /></div>
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
 
export default Tags;
