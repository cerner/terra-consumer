import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples

// Test Routes
/* eslint-disable import/first */

import TestLinks from './TestLinks';
import NavigationTestLinks from 'terra-consumer-nav/tests/nightwatch/NavTestRoutes';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    { NavigationTestLinks }
  </Router>
), document.getElementById('root'));
