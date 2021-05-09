import React, { Component } from 'react'
import { Container,Row } from 'react-bootstrap'
import './css/Posts.css'
import load from './images/load.svg'

class Posts extends Component  {
    constructor(props){
        super(props);
        this.state = {
            isloding:false,
            intervalID:null,
            posts_info:[],
            error:null,
        }
    }
    getdata=()=>{
      this.setState({ error:null })
      fetch(`http://127.0.0.1:8000/blog/2`)
  
      .then(response => response.json())
      
      .then(data =>
        this.setState({
          posts_info: data
        })
      )
      
      .catch(error => this.setState({ error:error }));

      

    }
    componentDidMount(){
        this.setState({intervalID : setInterval(this.getdata.bind(this), 10000)})
    }
    componentWillUnmount(){
        clearInterval(this.state.intervalID)
    }
    render(){
        const { isLoading, api_info, error } = this.state;
        return (
        <div>

            <h1>{error ? <p  className="error">{error.message}.try again!!</p> : null}</h1>

            {isLoading ? (
              api_info.map(info => {
                const {id, heading , body ,image ,author ,category , read_time } = info;
                return (
                  <Container key={id}>

                  </Container>
                );
              })
            ) : 
              <h3 className="loding"><img className="load" alt="loading..." src={load}/><Container key={api_info}>
                  {api_info}
              </Container></h3>}
        </div>
        );
    }
}

export default Posts;
