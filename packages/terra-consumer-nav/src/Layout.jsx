import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Nav from './Nav';
import styles from './Layout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  // expand this
  nav: PropTypes.object,
};

const Layout = ({
  nav,
  ...customProps
}) => (
  <div className={cx('layout', customProps.className)}>
    <Nav {...nav} />
    <div className={cx('main-container')}>
      <h2>I am in the main content</h2>
    </div>
  </div>
);

Layout.propTypes = propTypes;

export default Layout;
