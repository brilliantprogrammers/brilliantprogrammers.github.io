import Nav from './components/nav';
import './App.css';
import {
  HashRouter,
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
function App() {
  return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop/>
        <Route render = {({ location }) => (
          <div location = { location }>
            <Nav/>
            <Switch location = { location }>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={Posts} />
              <Route path="/contact" component={Contact} />
              <Route path="/about" component={About} />
              <Redirect to='/'/>
            </Switch>
            <Foot/>
           </div>
       )} />
    </HashRouter>
  );
}


export default App;
