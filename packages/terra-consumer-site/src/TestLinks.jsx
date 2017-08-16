/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router';
import styles from './site.scss';

const TestLinks = () => (
  <div>
    <ul className={styles['site-nav']}>
      <li><Link to="/tests/nav-tests">Nav Tests</Link></li>
    </ul>
  </div>
);

export default TestLinks;
