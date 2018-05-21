import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import App from './App.jsx';
import About from './About';
import Contact from './Contact';
import Git from './Git';
const Routing = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
  
        <hr/>
  
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        {/* <Route path="/git" component={Git}/> */}
        <Route exact path="/Git" component={Git}></Route>
        <Route path="/Git/:id" component={Git}></Route>
      </div>
    </Router>
  )
  export default Routing