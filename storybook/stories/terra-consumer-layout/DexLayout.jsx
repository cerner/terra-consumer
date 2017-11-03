import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import Layout from 'terra-consumer-layout';
import './DexTheme.scss';

const data = {
  nav: {
    navItems: [
      {
        url: '/',
        text: 'Dashboard',
        badgeValue: 1,
      },
      {
        text: 'Messaging',
        badgeValue: 2,
        subItems: [
          {
            url: '/inbox',
            text: 'Inbox',
            badgeValue: 1,
          },
          {
            url: '/sent',
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
            url: '/health',
            text: 'Health',
          },
          {
            url: '/record',
            text: 'Record',
          },
        ],
      },
      {
        text: 'Test Data',
        subItems: [
          {
            url: '/test',
            text: 'Tests test test Tests test testa Tes test test ',
            icon: <IconPerson />,
            badgeValue: 2,
          },
          {
            url: '/data',
            text: 'Data',
            badgeValue: 2,
          },
        ],
      },
      {
        text: 'More Tests',
        subItems: [
          {
            url: '/more',
            text: 'More',
          },
          {
            url: '/tests',
            text: 'Tests',
            icon: <IconPerson />,
          },
        ],
      },
      {
        url: 'http://google.com',
        text: 'Google External',
        isExternal: true,
        target: '_blank',
      },
    ],
    profile: {
      profileLinks: [
        {
          text: 'Account',
          url: '/account',
        },
        {
          text: 'Notifications',
          url: '/notifications',
        },
        {
          url: 'http://google.com',
          text: 'Google External',
          isExternal: true,
          target: '_blank',
        },
      ],
        // comment out userName to see signin
      userName: 'Martin O&#39;Neil',
      signinUrl: 'http://localhost:8080/',
      signoutUrl: 'http://localhost:8080/',
    },
  },

  helpItems: [
    {
      text: 'Technical Questions',
      children: [{
        text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
      }],
    },
    {
      text: 'Get Support ID',
      children: [{
        text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
      }],
    },
    {
      isExternal: true,
      url: 'http://google.com',
      text: 'Google External',
      target: '_blank',
    },
  ],

  logo: {
    mobileLogo: {
      url: 'https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/Olympic-logo.png',
      altText: 'Placeholder logo',
    },
    navLogo: {
      url: 'https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/Olympic-logo.png',
      altText: 'Placeholder logo',
      isCard: false,
    },
  },
};

export default () => (
  <main className="dex-theme">
    <BrowserRouter>
      <Layout {...data}>
        <Route exact path="/" render={() => <h1 style={{ color: 'white' }}>of Thrones more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content</h1>} />
        <Route exact path="/inbox" render={() => <h1>You have millions of unread messages</h1>} />
        <Route exact path="/sent" render={() => <h1>Opps, it is empty</h1>} />
        <Route exact path="/health" render={() => <h1>Game</h1>} />
        <Route exact path="/record" render={() => <h1 style={{ color: 'white' }}>of Thrones more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content more content</h1>} />
      </Layout>
    </BrowserRouter>
  </main>
);
