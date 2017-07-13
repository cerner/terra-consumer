import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import ArrangeExamples from './examples/arrange/Index';

// Test Routes
/* eslint-disable import/first */
import ArrangeTestRoutes from 'terra-arrange/tests/nightwatch/ArrangeTestRoutes';

import TestLinks from './TestLinks';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="arrange" component={ArrangeExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {ArrangeTestRoutes}
  </Router>
), document.getElementById('root'));
