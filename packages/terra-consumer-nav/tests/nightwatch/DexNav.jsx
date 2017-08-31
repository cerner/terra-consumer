import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
// NOTE: swap these for deploy/development
// import Nav from '../../lib/Nav';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import Layout from './Layout';

const DexNav = () => {
  const props = {
    nav: {
      navItems: [
        {
          url: '/',
          text: 'Dashboard',
          icon: <IconPerson />,
        },
        {
          text: 'Messaging',
          badgeValue: 2,
          icon: <IconPerson />,
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
          icon: <IconPerson />,
          subItems: [
            {
              url: '/health',
              text: 'Health',
              icon: <IconPerson />,
            },
            {
              url: '/record',
              text: 'Record',
              icon: <IconPerson />,
            },
          ],
        },
        {
          text: 'Test Data',
          subItems: [
            {
              url: '/test',
              text: 'Test',
              icon: <IconPerson />,
            },
            {
              url: '/data',
              text: 'Data',
              icon: <IconPerson />,
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
            },
          ],
        },
      ],
      logo: {
        url: 'http://placeholder.pics/svg/250x100/FF0606-FFFFFF',
        altText: 'Placeholder logo',
        isCard: true,
      },
      profile: {
        profileLinks: [
          {
            text: 'Account',
            icon: (<IconOutlineQuestionMark />),
            url: '/account',
          },
          {
            text: 'Notifications',
            icon: (<IconOutlineQuestionMark />),
            url: '/notifications',
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
        icon: (<IconOutlineQuestionMark />),
        children: [{
          text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
        }],
      },
      {
        text: 'Get Support ID',
        icon: (<IconOutlineQuestionMark />),
        children: [{
          text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
        }],
      },
      {
        isExternal: true,
        text: 'Link',
        url: 'http://localhost:8080/',
        icon: (<IconOutlineQuestionMark />),
      },
      {
        isExternal: true,
        text: 'Another link',
        url: 'http://localhost:8080/',
      },
    ],
    locale: 'en-US',
  };

  const content = (
    <div>
      <Route exact path="/" render={() => <h1>Home, sweet home!</h1>} />
      <Route exact path="/inbox" render={() => <h1>You have millions of unread messages</h1>} />
      <Route exact path="/sent" render={() => <h1>Opps, it is empty</h1>} />
      <Route exact path="/health" render={() => <h1>Game</h1>} />
      <Route exact path="/record" render={() => <h1>of Thrones</h1>} />
    </div>
  );
  return (
    <BrowserRouter>
      <Layout {...props} id="layout" mainContent={content} />
    </BrowserRouter>
  );
};

export default DexNav;
