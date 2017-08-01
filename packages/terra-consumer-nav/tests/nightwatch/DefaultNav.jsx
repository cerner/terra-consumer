import React from 'react';

// NOTE: swap these for deploy/development
// import Nav from '../../lib/Nav';
import Layout from '../../src/Layout';

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
          uri: '#',
          text: 'Dashboard',
          isActive: true,
        },
        {
          uri: '',
          text: 'Messaging',
          subItems: [
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
    },
  };

  return (
    <Layout {...props} />
  );
};

export default DefaultNav;
