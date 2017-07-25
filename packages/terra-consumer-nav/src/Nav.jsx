import React from 'react';
import PropTypes from 'prop-types';
import QuickLinks from './components/quick-links/QuickLinks';
import NavItems from './components/nav-items/NavItems';
import './Nav.scss';

const propTypes = {
  test: PropTypes.string,
  help: PropTypes.string,
  quickLinks: PropTypes.arrayOf(PropTypes.object),
  navItems: PropTypes.arrayOf(PropTypes.object),
  mainContent: PropTypes.node,
};

const defaultProps = {
  test: 'hello world',
  help: 'help',
  mainContent: (
    <div>
      <br />
      <br />
      <br />
      <a href="#nav">show nav (mobile)</a>
    </div>
  ),
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
  quickLinks,
  navItems,
  mainContent,
  ...customProps
}) => (
  <div className="layout" {...customProps}>
    <div id="nav">
      {/* this represents the logo */}
      <div className="logo-container">
        <img src="http://placeholder.pics/svg/270x170/FF0606-FFFFFF" alt="placeholder" />
      </div>
      {/* this represents the Quick Actions */}
      <div className="u-mh--md">
        <QuickLinks quickLinks={quickLinks} />
      </div>
      {/* this represents the Nav items */}
      <div className="u-mh--md u-mt--md">
        <NavItems navItems={navItems} />
      </div>
      <div className="profile-container">
        {test}
      </div>
      <div className="help-button">
        {`?  -  ${help}`}
      </div>
    </div>
    <div className="main-container">
      {mainContent}
    </div>
  </div>
);

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
