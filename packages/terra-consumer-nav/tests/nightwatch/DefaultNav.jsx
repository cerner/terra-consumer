import React from 'react';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
// NOTE: swap these for deploy/development
// import Nav from '../../lib/Nav';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import Layout from './Layout';

const DefaultNav = () => {
  const props = {
    nav: {
      quickLinks: [
        {
          url: '/?react_perf',
          icon: <IconPerson />,
          text: 'Create Appointment',
        },
        {
          url: '/?react_perf',
          icon: (<IconOutlineQuestionMark />),
          text: 'Send Message',
        },
        {
          url: '/?react_perf',
          text: 'Refill Medications',
        },
        {
          url: '/?react_perf',
          text: 'Log Daily Fitness',
        },
      ],
      navItems: [
        {
          url: 'localhost:8080',
          text: 'Home',
        },
        {
          url: '?react_perf#/tests/nav-tests/default',
          text: 'Dashboard',
          icon: <IconPerson />,
        },
        {
          text: 'Messaging',
          badgeValue: 2,
          icon: <IconPerson />,
          subItems: [
            {
              url: '#inbox',
              text: 'Inbox',
              isActive: true,
              badgeValue: 1,
            },
            {
              url: '#sent',
              text: 'Sent',
              badgeValue: 1,
            },
          ],
        },
        {
          text: 'Health Record',
          badgeValue: 0,
          icon: <IconPerson />,
          subItems: [
            {
              url: '#health',
              text: 'Health',
              icon: <IconPerson />,
            },
            {
              url: '#record',
              text: 'Record',
              icon: <IconPerson />,
            },
          ],
        },
        {
          text: 'Test Data',
          subItems: [
            {
              url: '#test',
              text: 'Test',
              icon: <IconPerson />,
            },
            {
              url: '#data',
              text: 'Data',
              icon: <IconPerson />,
            },
          ],
        },
        {
          text: 'More Tests',
          subItems: [
            {
              url: '#more',
              text: 'More',
            },
            {
              url: '#tests',
              text: 'Tests',
            },
          ],
        },
      ],
      logo: {
        // url: 'http://placeholder.pics/svg/250x100/FF0606-FFFFFF',
        altText: 'Placeholder logo',
        isCard: true,
      },
      profile: {
        profileLinks: [
          {
            text: 'Account',
            icon: (<IconOutlineQuestionMark />),
            url: 'http://localhost:8080/',
          },
          {
            text: 'Notifications',
            icon: (<IconOutlineQuestionMark />),
            url: 'http://localhost:8080/',
          },
        ],
        // comment out userName to see signin
        userName: 'John Snow',
        signinUrl: 'http://localhost:8080/',
        signoutUrl: 'http://localhost:8080/',
      },
    },

    helpItems: [
      {
        text: 'Technical Questions',
        url: 'http://localhost:8080/',
        icon: (<IconOutlineQuestionMark />),
        children: [{
          text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
          url: 'http://localhost:8080/',
        }],
      },
      {
        text: 'Get Support ID',
        url: 'http://localhost:8080/',
        icon: (<IconOutlineQuestionMark />),
        children: [{
          text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
          url: 'http://localhost:8080/',
        }],
      },
    ],
    locale: 'en-US',
  };

  return (
    <Layout {...props} id="layout" />
  );
};

export default DefaultNav;
