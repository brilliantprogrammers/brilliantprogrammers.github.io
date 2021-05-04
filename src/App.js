import Nav from './components/nav';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Foot from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
function App() {
  return (
    <div className="App">
      <Router basename={window.location.pathname || ''}> 
        <Nav/>
        <Switch>  
          <Route exact path="/">
            <Home/>    
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
        <Foot/>
      </Router>
    </div>
  );
}

export default App;
