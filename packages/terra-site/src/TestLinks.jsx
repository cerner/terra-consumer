/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';

const TestLinks = () => (
  <div>
    <ul className="site-nav">
      <li><Link to="/tests/hello-world">Hello World</Link></li>
    </ul>
  </div>
);

export default TestLinks;
