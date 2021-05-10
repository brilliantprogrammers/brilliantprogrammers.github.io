import React,{ useEffect, useState } from 'react'
import { Container,Row } from 'react-bootstrap'
import './css/Posts.css'
import load from './images/load.svg'

function Posts(props) {
    const [appState, setAppState] = useState({
      loading: true,
      repos: null,
    });
  
    useEffect((props) => {
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
                {appState.repos.heading}
            </Container>
        )
)
}

export default Posts;
