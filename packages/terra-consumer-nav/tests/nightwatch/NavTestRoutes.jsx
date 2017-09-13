/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import NavTests from './NavTests';

// Test Cases
import BurgerButtonTest from './BurgerButtonTest';
import HelpButtonTest from './HelpButtonTest';
import NavLogoTest from './NavLogoTest';
import ProfileButtonTest from './ProfileButtonTest';
import SimpleNav from './SimpleNav';
import SimpleNavWithTextLogo from './SimpleNavWithTextLogo';

const routes = (
  <div>
    <Route path="/tests/nav-tests" component={NavTests} />
    <Route path="/tests/nav-tests/burger-button" component={BurgerButtonTest} />
    <Route path="/tests/nav-tests/help-button" component={HelpButtonTest} />
    <Route path="/tests/nav-tests/logo" component={NavLogoTest} />
    <Route path="/tests/nav-tests/profile-button" component={ProfileButtonTest} />
    <Route path="/tests/nav-tests/simple-nav" component={SimpleNav} />
    <Route path="/tests/nav-tests/simple-nav-logo-text" component={SimpleNavWithTextLogo} />
  </div>
);

export default routes;
