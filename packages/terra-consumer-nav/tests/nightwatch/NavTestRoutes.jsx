/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import NavTests from './NavTests';

// Test Cases
import DefaultNav from './DefaultNav';

const routes = (
  <div>
    <Route path="/tests/nav-tests" component={NavTests} />
    <Route path="/tests/nav-tests/default" component={DefaultNav} />
  </div>
);

export default routes;
