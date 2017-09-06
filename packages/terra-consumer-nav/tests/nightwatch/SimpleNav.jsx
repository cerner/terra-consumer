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
      badgeValue: 2,
      icon: <IconPerson />,
      subItems: [
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
  },
  profile: {
    profileLinks:
    [
      {
        badgeValue: null,
        attrs: null,
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Account',
        icon: 'icon-cog',
      },
      {
        badgeValue: null,
        attrs: null,
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Notifications',
        icon: 'icon-message-send',
      },
      {
        badgeValue: null,
        attrs: null,
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Patient Information',
        icon: 'icon-demographics',
      },
      {
        badgeValue: null,
        attrs: null,
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Access Logs',
        icon: 'icon-client-access-logs',
      },
      {
        badgeValue: null,
        attrs: null,
        isExternal: true,
        url: 'http://localhost:8080/',
        text: 'Help',
        icon: 'icon-client-question-alt',
      },
      {
        badgeValue: null,
        attrs: null,
        isExternal: true,
        url: '#',
        text: 'English (United States)',
        subItems:
        [{
          badgeValue: null,
          attrs: { 'data-locale': 'ar' },
          isExternal: true,
          url: '#',
          text: '&#8235;\u0627\u0644\u0639\u0631\u0628\u064a\u0651\u0629&#8236;',
          icon: null,
        },
        {
          badgeValue: null,
          attrs: { 'data-locale': 'es' },
          isExternal: true,
          url: '#',
          text: '&#8234;Espa\u00f1ol&#8236;',
          icon: null,
        },
        {
          badgeValue: null,
          attrs: { 'data-locale': 'en-gb' },
          isExternal: true,
          url: '#',
          text: '&#8234;English (United Kingdom)&#8236;',
          icon: null,
        },
        {
          badgeValue: null,
          attrs: { 'data-locale': 'fr-fr' },
          isExternal: true,
          url: '#',
          text: '&#8234;Fran\u00e7ais (France)&#8236;',
          icon: null,
        }],
        icon: null }],
      // comment out userName to see signin
    userName: 'John Snow',
    signinUrl: 'http://localhost:8080/',
    signoutUrl: 'http://localhost:8080/',
  },
};

export default () => (
  <I18nShell>
    {/* eslint-disable no-alert */}
    <Nav {...nav} isMobileNavOpen onRequestClose={() => alert('Callback to close')} id="nav" />
  </I18nShell>
);
