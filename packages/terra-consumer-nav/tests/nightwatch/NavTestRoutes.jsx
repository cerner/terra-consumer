/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import NavTests from './NavTests';

// Test Cases
import PortalNav from './PortalNav';
import DexNav from './DexNav';

const routes = (
  <div>
    <Route path="/tests/nav-tests" component={NavTests} />
    <Route path="/tests/nav-tests/portal" component={PortalNav} />
    <Route path="/tests/nav-tests/dex" component={DexNav} />
  </div>
);

export default routes;
