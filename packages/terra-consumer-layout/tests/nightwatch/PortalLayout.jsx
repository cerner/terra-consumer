import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import Layout from '../../src/Layout';
import './LayoutTests.scss';
import AppShellExample from './AppShellExample';

const data = {
  nav: {
    navItems: [
      {
        // any link that doesn't use react router link is external
        isExternal: true,
        url: 'localhost:8080',
        text: 'Home',
      },
      {
        url: '/',
        text: 'Dashboard',
        icon: <IconPerson />,
      },
      {
        text: 'Messaging',
        badgeValue: '!',
        icon: <IconPerson />,
        subItems: [
          {
            isExternal: true,
            url: '#inbox',
            text: 'Inbox',
            badgeValue: "'",
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: '   ',
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'Inbox',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'Inbox',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'An Active Link',
            isActive: false,
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'Inbox',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'Inbox',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'Inbox',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'An Active Link',
            isActive: true,
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'Inbox',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'Inbox',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'Inbox',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#sent',
            text: 'Sent',
            badgeValue: 1,
          },
          {
            isExternal: true,
            url: '#inbox',
            text: 'An Active Link',
            isActive: false,
            badgeValue: 1,
          },
          {
            isExternal: true,
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
            isExternal: true,
            url: '#health',
            text: 'Health',
            icon: <IconPerson />,
          },
          {
            isExternal: true,
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
            isExternal: true,
            url: '#test',
            text: 'Test',
            icon: <IconPerson />,
          },
          {
            isExternal: true,
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
            isExternal: true,
            url: '#more',
            text: 'More',
          },
          {
            isExternal: true,
            url: '#tests',
            text: 'Tests',
          },
        ],
      },
    ],
    logo: {
      url: 'http://photos.prnewswire.com/prnfull/20140210/DC61972LOGO',
      altText: 'Placeholder logo',
      isCard: true,
      link:
      {
        url: 'http://localhost:8080/',
        isExternal: true,
      },
    },
    profile: {
      profileLinks:
      [
        {
          target: '_self',
          url: 'http://localhost:8080/',
          text: 'Account',
          subItems: [],
          isExternal: true,
          icon: 'icon-cog',
        },
        {
          target: '_self',
          url: 'http://localhost:8080/',
          text: 'Notifications',
          subItems: [],
          isExternal: true,
          icon: 'icon-message-send',
        },
        {
          target: '_self',
          url: 'http://localhost:8080/',
          text: 'Patient Information',
          subItems: [],
          isExternal: true,
          icon: 'icon-demographics',
        },
        {
          target: '_self',
          url: 'http://localhost:8080/',
          text: 'Access Logs',
          subItems: [],
          isExternal: true,
          icon: 'icon-client-access-logs',
        },
        {
          target: '_blank',
          url: 'http://localhost:8080/',
          text: 'Help',
          subItems: [],
          isExternal: true,
          icon: 'icon-client-question-alt',
        },
        {
          target: '_self',
          url: '#',
          isExternal: true,
          text: 'English (United States)&#x200E;',
          subItems: [
            {
              'data-locale': 'ar',
              isExternal: true,
              url: '#1',
              text: '&#8235;\u0627\u0644\u0639\u0631\u0628\u064a\u0651\u0629 &#8236;',
            },
            {
              'data-locale': 'es',
              isExternal: true,
              url: '#2',
              text: 'Espa\u00f1ol',
            },
            {
              'data-locale': 'en-gb',
              isExternal: true,
              url: '#3',
              text: 'English (United Kingdom)&#x200E;',
            },
            {
              'data-locale': 'fr-fr',
              isExternal: true,
              url: '#4',
              text: 'Fran\u00e7ais (France)&#x200E;',
            },
          ],
        },
      ],
      // comment out userName to see signin
      userName: 'Rajasekhara Srinivasulu Laxminarayana Siva Venkata Sai',
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
        text: 'abcdefghiJ01234Cerner56789Mnopqrstuvwxyz',
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
    {
      text: 'Nav Link',
      url: '/test',
    },
  ],
};

const card = (<div style={{ background: '#FFF', marginBottom: '10px', color: '#000', padding: '10px', borderRadius: '5px' }}>
  {/* eslint-disable */}
  { Array.apply(null, { length: 100 }).map((n, i) => <span key={i}>Testing </span>) }
</div>);

const content = (
  <div>
    <Route
      exact
      path="/"
      render={() => (
        <div>
          {/* eslint-disable */}
          { Array.apply(null, { length: 5 }).map((n, i) => <div key={i}>{card}</div>) }
        </div>
      )}
    />
    <Route exact path="/test" render={() => <h1>Test Link! Works</h1>} />
  </div>
);

export default () => (
  <AppShellExample>
    <BrowserRouter>
      <Layout {...data}>
        <div>{content}</div>
        {/* <div style={{ padding: '500px 0', border: '1px dashed white' }} /> */}
      </Layout>
    </BrowserRouter>
  </AppShellExample>
);
