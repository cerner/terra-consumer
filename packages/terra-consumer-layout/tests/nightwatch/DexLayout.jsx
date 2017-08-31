import React from 'react';
import { Route } from 'react-router-dom';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import Layout from '../../src/Layout';
import AppShellExample from './AppShellExample';

const data = {
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
};

export default () => (
  <AppShellExample useRouter>
    <Layout {...data}>
      <Route exact path="/" render={() => <h1>Home, sweet home!</h1>} />
      <Route exact path="/inbox" render={() => <h1>You have millions of unread messages</h1>} />
      <Route exact path="/sent" render={() => <h1>Opps, it is empty</h1>} />
      <Route exact path="/health" render={() => <h1>Game</h1>} />
      <Route exact path="/record" render={() => <h1>of Thrones</h1>} />
    </Layout>
  </AppShellExample>
);
