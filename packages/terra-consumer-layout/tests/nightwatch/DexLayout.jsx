import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../src/Layout';
import AppShellExample from './AppShellExample';

const data = {
  nav: {
    navItems: [
      {
        url: 'localhost:8080',
        text: 'Home',
      },
      {
        url: '?react_perf#/tests/nav-tests/default',
        text: 'Dashboard',
      },
      {
        url: 'http://google.com',
        text: 'Google External',
        target: '_blank',
      },
      {
        text: 'Messaging',
        badgeValue: 2,
        subItems: [
          {
            url: '#inbox',
            text: 'Inbox',
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
        subItems: [
          {
            url: '#health',
            text: 'Health',
          },
          {
            url: '#record',
            text: 'Record',
          },
        ],
      },
      {
        text: 'Test Data',
        subItems: [
          {
            url: '#test',
            text: 'Test',
          },
          {
            url: '#data',
            text: 'Data',
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
      url: 'https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/Olympic-logo.png',
      altText: 'Client Logo',
      isCard: false,
    },
    profile: {
      profileLinks: [
        {
          text: 'Account',
          url: 'http://localhost:8080/',
        },
        {
          text: 'Notifications',
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
      children: [{
        text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
        url: 'http://localhost:8080/',
      }],
    },
    {
      text: 'Get Support ID',
      url: 'http://localhost:8080/',
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
