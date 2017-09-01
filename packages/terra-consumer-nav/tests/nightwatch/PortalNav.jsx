import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
// NOTE: swap these for deploy/development
// import Nav from '../../lib/Nav';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import Layout from './Layout';

const PortalNav = () => {
  const props = {
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
          badgeValue: 2,
          icon: <IconPerson />,
          subItems: [
            {
              isExternal: true,
              url: '#inbox',
              text: 'ACTIVE LINK',
              badgeValue: 1,
              isActive: true,
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
        url: 'http://placeholder.pics/svg/250x100/FF0606-FFFFFF',
        altText: 'Placeholder logo',
        isCard: true,
      },
      profile: {
        profileLinks:
        [
          {
            badgeValue: null,
            attrs: null,
            target: '_self',
            url: 'http://localhost:8080/',
            text: 'Account',
            subItems: [],
            isActive: false,
            isExternal: true,
            icon: 'icon-cog',
          },
          {
            badgeValue: null,
            attrs: null,
            target: '_self',
            url: 'http://localhost:8080/',
            text: 'Notifications',
            subItems: [],
            isActive: false,
            isExternal: true,
            icon: 'icon-message-send',
          },
          {
            badgeValue: null,
            attrs: null,
            target: '_self',
            url: 'http://localhost:8080/',
            text: 'Patient Information',
            subItems: [],
            isActive: false,
            isExternal: true,
            icon: 'icon-demographics',
          },
          {
            badgeValue: null,
            attrs: null,
            target: '_self',
            url: 'http://localhost:8080/',
            text: 'Access Logs',
            subItems: [],
            isActive: false,
            isExternal: true,
            icon: 'icon-client-access-logs',
          },
          {
            badgeValue: null,
            attrs: null,
            target: '_blank',
            url: 'http://localhost:8080/',
            text: 'Help',
            subItems: [],
            isActive: false,
            isExternal: true,
            icon: 'icon-client-question-alt',
          },
          {
            badgeValue: null,
            attrs: null,
            target: '_self',
            url: '#',
            isExternal: true,
            text: 'English (United States)',
            subItems:
            [{
              badgeValue: null,
              attrs: { 'data-locale': 'ar' },
              target: '_self',
              url: '#',
              text: '&#8235;\u0627\u0644\u0639\u0631\u0628\u064a\u0651\u0629&#8236;',
              subItems: [],
              isActive: false,
              isExternal: true,
              icon: null,
            },
            {
              badgeValue: null,
              attrs: { 'data-locale': 'es' },
              target: '_self',
              url: '#',
              text: '&#8234;Espa\u00f1ol&#8236;',
              subItems: [],
              isActive: false,
              isExternal: true,
              icon: null,
            },
            {
              badgeValue: null,
              attrs: { 'data-locale': 'en-gb' },
              target: '_self',
              url: '#',
              text: '&#8234;English (United Kingdom)&#8236;',
              subItems: [],
              isActive: false,
              isExternal: true,
              icon: null,
            },
            {
              badgeValue: null,
              attrs: { 'data-locale': 'fr-fr' },
              target: '_self',
              url: '#',
              text: '&#8234;Fran\u00e7ais (France)&#8236;',
              subItems: [],
              isActive: false,
              isExternal: true,
              icon: null,
            }],
            isActive: false,
            icon: null }],
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
      {
        text: 'Nav Link',
        url: '/test',
      },
    ],
    locale: 'en-US',
  };
  const content = (
    <div>
      <Route exact path="/" render={() => <h1>Home, sweet home!</h1>} />
      <Route exact path="/test" render={() => <h1>Test Link! Works</h1>} />
    </div>
    );
  return (
    <BrowserRouter>
      <Layout {...props} id="layout" mainContent={content} />
    </BrowserRouter>
  );
};

export default PortalNav;
