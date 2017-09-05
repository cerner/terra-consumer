/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import LayoutTests from './LayoutTests';

// Test Cases
import DexLayout from './DexLayout';
import PortalLayout from './PortalLayout';

const routes = (
  <div>
    <Route path="/tests/layout-tests" component={LayoutTests} />
    <Route path="/tests/layout-tests/dex" component={DexLayout} />
    <Route path="/tests/layout-tests/portal" component={PortalLayout} />
  </div>
);

export default routes;
