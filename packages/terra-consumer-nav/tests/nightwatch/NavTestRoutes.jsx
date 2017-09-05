/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import NavTests from './NavTests';

// Test Cases
import SimpleNav from './SimpleNav';
import HelpButtonTest from './HelpButtonTest';

const routes = (
  <div>
    <Route path="/tests/nav-tests" component={NavTests} />
    <Route path="/tests/nav-tests/simple-nav" component={SimpleNav} />
    <Route path="/tests/nav-tests/help" component={HelpButtonTest} />
  </div>
);

export default routes;
