import React from 'react';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
// NOTE: swap these for deploy/development
// import Nav from '../../lib/Nav';
import Layout from './Layout';
import IconInfo from '../../src/icons/IconInfo';

const DefaultNav = () => {
  const props = {
    nav: {
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
          uri: '?react_perf#/tests/nav-tests/default',
          text: 'Dashboard',
          isActive: true,
        },
        {
          uri: '',
          text: 'Messaging',
          badgeValue: 2,
          subItems: [
            {
              uri: '#inbox',
              text: 'Inbox',
              isActive: true,
              badgeValue: 1,
            },
            {
              uri: '#sent',
              text: 'Sent',
              isActive: false,
              badgeValue: 1,
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
          subItems: [
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
      logo: {
        path: 'http://placeholder.pics/svg/270x170/FF0606-FFFFFF',
        altText: 'Placeholder logo',
        isCard: false,
      },

      helpItems: [
        {
          text: 'Technical Questions',
          uri: 'http://localhost:8080/',
          icon: (<IconInfo />),
          children: [{
            text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
            uri: 'http://localhost:8080/',
          }],
        },
        {
          text: 'Get Support ID',
          uri: 'http://localhost:8080/',
          icon: (<IconInfo />),
          children: [],
        },
      ],
      helpId: 'nav-help-button',
      profileLinks: [
        {
          text: 'Account',
          icon: (<IconInfo />),
          uri: 'http://localhost:8080/',
        },
        {
          text: 'Notifications',
          icon: (<IconInfo />),
          uri: 'http://localhost:8080/',
        },
      ],
      userName: 'John Snow',
      avatar: (<IconPerson />),
      signoutUrl: 'http://localhost:8080/',
    },
  };

  return (
    <Layout {...props} id="layout" />
  );
};

export default DefaultNav;
