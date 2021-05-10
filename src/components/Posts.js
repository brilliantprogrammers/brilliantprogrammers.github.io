import React,{ useEffect, useState } from 'react'
import { Container,Row } from 'react-bootstrap'
import './css/Posts.css'
import load from './images/load.svg'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Posts(props) {
    const [appState, setAppState] = useState({
      loading: true,
      repos: null,
    });
  
    useEffect(() => {
      setAppState({ loading: true });
      const apiUrl = `https://brillianttyagi.pythonanywhere.com/blog/`+props.match.params.id.toString();
      fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
          setAppState({ loading: false, repos: repos });
        });
    }, [setAppState]);
    
    return (
        appState.loading ? (<h3 className="loding"><img className="load" alt="loading..." src={load}/></h3>) : (
            <Container key={appState.repos.id} className="posts">
                <Row><h1 className="posts_heading">{appState.repos.heading}</h1></Row>
                <Row className="posts_row"><img id="img_" src={"https://brillianttyagi.pythonanywhere.com/"+appState.repos.image} /></Row>
                <Row><span className="author"><FontAwesomeIcon icon={faUser} />{appState.repos.author}</span><span className="time">{appState.repos.created}</span></Row>
                <Row id= "posts_body" dangerouslySetInnerHTML={{__html: appState.repos.body}}></Row>
            </Container>
        )
)
}

export default Posts;
