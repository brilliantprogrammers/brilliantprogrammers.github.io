import React,{ useEffect, useState } from 'react'
import { Container,Row } from 'react-bootstrap'
import './css/Posts.css'
import load from './images/load.svg'

function Posts() {
    const [appState, setAppState] = useState({
      loading: true,
      repos: null,
    });
  
    useEffect(() => {
      setAppState({ loading: true });
      const apiUrl = `http://127.0.0.1:8000/blog/2`;
      fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
          setAppState({ loading: false, repos: repos });
        });
    }, [setAppState]);
    
    return (
        appState.loading ? (<h3 className="loding"><img className="load" alt="loading..." src={load}/></h3>) : (
            <Container key={appState.repos.id} className="posts">
                
            </Container>
        )
)
}

export default Posts;
