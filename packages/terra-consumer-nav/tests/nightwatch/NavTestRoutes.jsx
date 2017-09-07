/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import NavTests from './NavTests';

// Test Cases
import BurgerButtonTest from './BurgerButtonTest';
import HelpButtonTest from './HelpButtonTest';
import SimpleNav from './SimpleNav';

const routes = (
  <div>
    <Route path="/tests/nav-tests" component={NavTests} />
    <Route path="/tests/nav-tests/burger-button" component={BurgerButtonTest} />
    <Route path="/tests/nav-tests/help-button" component={HelpButtonTest} />
    <Route path="/tests/nav-tests/simple-nav" component={SimpleNav} />
  </div>
);

export default routes;
