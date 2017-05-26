import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './App/App';
import Mentors from './Mentors/Mentors';
import './index.css';

ReactDOM.render(
  (
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/mentors' component={Mentors} />
      </div>
    </Router>
  ),
  document.getElementById('root')
);
