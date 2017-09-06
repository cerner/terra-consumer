/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const LayoutTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/layout-tests/dex">Layout - Dex</Link></li>
      <li><Link to="/tests/layout-tests/portal">Layout - Portal</Link></li>
      <li><Link to="/tests/layout-tests/memlx">Layout - Memorial Herman</Link></li>
    </ul>
  </div>
);

export default LayoutTests;
