import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import NavExamples from './examples/nav/Index';

// Test Routes
/* eslint-disable import/first */
import TestLinks from './TestLinks';
// import IconTest from './IconTest';
import IconExamples from './examples/icon/IconExamples';
import NavigationTestLinks from 'terra-consumer-nav/tests/nightwatch/NavTestRoutes';
import IconTestRoutes from 'terra-consumer-icon/tests/nightwatch/IconTestRoutes';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="nav" component={NavExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    { NavigationTestLinks }
    <Route path="/icon" component={IconExamples} />
    {IconTestRoutes}
  </Router>
), document.getElementById('root'));
