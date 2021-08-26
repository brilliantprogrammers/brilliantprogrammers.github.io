import Nav from './components/nav';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './components/Home';
import Foot from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import ScrollToTop from './components/scroll'
import Posts from './components/Posts';
import Tags from './components/Tags';
function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
        <Route render = {({ location }) => (
          <div location = { location }>
            <Nav/>
            <Switch location = { location }>
              <Route exact path="/" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Route path="/blog/:slug" component={Posts} />
              <Route path="/tags/:slug" component={Tags} />
              <Redirect to='/'/>
            </Switch>
            <Foot/>
           </div>
       )} />
    </Router>
  );
}


export default App;
