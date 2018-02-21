import React from 'react';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import Nav from '../../src/Nav';
import I18nShell from './I18nShell';

const nav = {
  navItems: [
    {
      // any link that doesn't use react router link is external
      isExternal: true,
      url: 'localhost:8080',
      text: 'Home',
    },
    {
      isExternal: true,
      url: '/',
      text: 'Dashboard',
      icon: <IconPerson />,
    },
    {
      text: 'Messaging',
      badgeValue: '!', // basic string symbol test
      icon: <IconPerson />,
      subItems: [
        {
          isExternal: true,
          url: '#inbox',
          text: 'Inbox',
          badgeValue: "'", // SafeHtml test
        },
        {
          isExternal: true,
          url: '#sent',
          text: 'Sent',
          badgeValue: '  ', // space test, should not render badge
        },
        {
          isExternal: true,
          url: '#inbox',
          text: 'Inbox',
          badgeValue: 1, // number test
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
          badgeValue: 1,
          isActive: true,
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
  },
  profile: {
    profileLinks:
    [
      {
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Account',
        icon: 'icon-cog',
      },
      {
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Notifications',
        icon: 'icon-message-send',
      },
      {
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Support',
        icon: 'icon-message-send',
      },
      {
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Patient Information',
        icon: 'icon-demographics',
      },
      {
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Access Logs',
        icon: 'icon-client-access-logs',
      },
      {
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Help',
        icon: 'icon-client-question-alt',
      },
      {
        isExternal: true,
        url: '#',
        text: 'English (United States)',
        subItems: [
          {
            'data-locale': 'ar',
            isExternal: true,
            url: '/#/tests/nav-tests/simple-nav',
            text: '\u0627\u0644\u0639\u0631\u0628\u064a\u0651\u0629',
            /* eslint-disable no-alert */
            customOnClick: () => { alert('Set locale to ar'); },
          },
          {
            'data-locale': 'es',
            isExternal: true,
            url: '/#/tests/nav-tests/simple-nav',
            text: 'Espa\u00f1ol',
            /* eslint-disable no-alert */
            customOnClick: () => { alert('Set locale to es'); },
          },
          {
            'data-locale': 'en-gb',
            isExternal: true,
            url: '/#/tests/nav-tests/simple-nav',
            text: 'English (United Kingdom)',
            /* eslint-disable no-alert */
            customOnClick: () => { alert('Set locale to en-gb'); },
          },
          {
            'data-locale': 'fr-fr',
            isExternal: true,
            url: '/#/tests/nav-tests/simple-nav',
            text: 'Fran\u00e7ais (France)',
            /* eslint-disable no-alert */
            customOnClick: () => { alert('Set locale to fr-fr'); },
          },
        ],
      }],
    // comment out userName to see signin
    userName: 'John Snow',
    signinUrl: 'http://localhost:8080/',
    signoutUrl: 'http://localhost:8080/',
  },
};

export default () => (
  <I18nShell>
    {/* eslint-disable no-alert */}
    <Nav {...nav} onRequestClose={() => alert('Callback to close')} id="nav" />
  </I18nShell>
);
