import React,{ useEffect, useState } from 'react'
import { Container,Row } from 'react-bootstrap'
import './css/Posts.css'
import load from './images/load.svg'
import { faUser,faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Helmet} from "react-helmet";

function Posts(props) {
    const [appState, setAppState] = useState({
      loading: true,
      repos: null,
    });
  
    useEffect(() => {
      setAppState({ loading: true });
      const apiUrl = 'https://brillianttyagi.pythonanywhere.com/blog/'+props.match.params.slug.toString();
      fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
          setAppState({ loading: false, repos: repos });
        });
    }, []);
    
    return (
        appState.loading ? (<h3 className="loding"><img className="load" alt="loading..." src={load}/></h3>) : (
            <Container key={appState.repos.id} className="posts">
              <Helmet>
                <title>{appState.repos.title}</title>
                <meta name="description" content={appState.repos.title+appState.repos.text} />
                <meta name="keywords" content="Python,Data structure,Javascript,Interview Questions,Coding,Programming" />
              </Helmet>
              <Row><h1 className="posts_heading">{appState.repos.title}</h1></Row>
              <Row id="pic_div"><img id="img_" alt={appState.repos.title} src={"https://brillianttyagi.pythonanywhere.com"+appState.repos.image} /></Row>
              <div className="wid"><span className="author"><FontAwesomeIcon icon={faUser} />{appState.repos.author}</span><span className="time"><FontAwesomeIcon icon={faClock} />{appState.repos.created}</span></div>
              <Row id= "posts_body" dangerouslySetInnerHTML={{__html: appState.repos.body}}></Row>
            </Container>
        )
)
}

export default Posts;
