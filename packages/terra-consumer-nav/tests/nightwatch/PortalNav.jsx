import React from 'react';
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
        profileLinks: [
          {
            isExternal: true,
            text: 'Account',
            icon: (<IconOutlineQuestionMark />),
            url: 'http://localhost:8080/',
          },
          {
            isExternal: true,
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

  return (
    <Layout {...props} id="layout" mainContent="This is portal content" />
  );
};

export default PortalNav;
