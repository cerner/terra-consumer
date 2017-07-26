import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import QuickLinks from './components/quick-links/QuickLinks';
import NavItems from './components/nav-items/NavItems';
import styles from './Nav.scss';

const cx = classNames.bind(styles);

const propTypes = {
  test: PropTypes.string,
  help: PropTypes.string,
  isMobileNavOpen: PropTypes.bool, // this is proof of concept. should we keep this?
  quickLinks: PropTypes.arrayOf(PropTypes.object),
  navItems: PropTypes.arrayOf(PropTypes.object),
  mainContent: PropTypes.node,
};

const defaultProps = {
  isMobileNavOpen: false,
  test: 'hello world',
  help: 'help',
  mainContent: null,
  quickLinks: [
    {
      uri: '/?react_perf',
      text: 'Create Appointment',
    },
    {
      uri: '/?react_perf',
      text: 'Send Message',
    },
    {
      uri: '/?react_perf',
      text: 'Refill Medications',
    },
    {
      uri: '/?react_perf',
      text: 'Log Daily Fitness',
    },
  ],
  navItems: [
    {
      uri: '#',
      text: 'Dashboard',
      isActive: true,
    },
    {
      uri: '',
      text: 'Messaging',
      sub_navs: [
        {
          uri: '#inbox',
          text: 'Inbox',
          isActive: true,
        },
        {
          uri: '#sent',
          text: 'Sent',
          isActive: false,
        },
      ],
    },
    {
      uri: '/?react_perf',
      text: 'Health Record',
      isActive: false,
    },
    {
      uri: '',
      text: 'See test data',
      sub_navs: [
        {
          uri: '#inbox2',
          text: 'Inbox',
          isActive: false,
        },
        {
          uri: '#sent2',
          text: 'Sent',
          isActive: false,
        },
      ],
    },
  ],
};

const Nav = ({
  test,
  help,
  isMobileNavOpen,
  quickLinks,
  navItems,
  mainContent,
  ...customProps
}) => (
  <div className={cx('layout')} {...customProps}>
    <div className={cx('nav', isMobileNavOpen ? 'open' : '')}>
      {/* this represents the logo
        TODO: extract into component
      */}
      <div className={cx('logo-container')}>
        <img src="http://placeholder.pics/svg/270x170/FF0606-FFFFFF" alt="placeholder" />
      </div>
      <QuickLinks quickLinks={quickLinks} />
      <NavItems navItems={navItems} />
      <div className={cx('profile-container')}>
        {test}
      </div>
      <div className={cx('help-button')}>
        {`?  -  ${help}`}
      </div>
    </div>
    <div className={cx('main-container')}>
      {mainContent}
    </div>
  </div>
);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
