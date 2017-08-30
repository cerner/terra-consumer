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
          type: 'EXTERNAL',
          icon: <IconPerson />,
          text: 'Create Appointment',
        },
        {
          url: '/?react_perf',
          type: 'EXTERNAL',
          icon: (<IconOutlineQuestionMark />),
          text: 'Send Message',
        },
        {
          url: '/?react_perf',
          type: 'EXTERNAL',
          text: 'Refill Medications',
        },
        {
          url: '/?react_perf',
          type: 'EXTERNAL',
          text: 'Log Daily Fitness',
        },
      ],
      navItems: [
        {
          url: '?react_perf#/tests/nav-tests/default',
          type: 'EXTERNAL',
          text: 'Dashboard',
          icon: <IconPerson />,
          isActive: false,
        },
        {
          text: 'Messaging',
          badgeValue: 2,
          subItems: [
            {
              url: '#inbox',
              type: 'EXTERNAL',
              text: 'Inbox',
              isActive: true,
              badgeValue: 1,
            },
            {
              url: '#sent',
              type: 'EXTERNAL',
              text: 'Sent',
              isActive: false,
              badgeValue: 1,
            },
          ],
        },
        {
          url: '/?react_perf',
          type: 'EXTERNAL',
          text: 'Health Record',
          isActive: false,
        },
        {
          text: 'See test data',
          subItems: [
            {
              url: '#inbox2',
              type: 'EXTERNAL',
              text: 'Inbox',
              isActive: false,
            },
            {
              url: '#sent2',
              type: 'EXTERNAL',
              text: 'Sent',
              isActive: false,
            },
          ],
        },
      ],
      logo: {
        url: 'http://placeholder.pics/svg/250x100/FF0606-FFFFFF',
        type: 'EXTERNAL',
        altText: 'Placeholder logo',
        isCard: true,
      },
      profileLinks: [
        {
          text: 'Account',
          icon: (<IconOutlineQuestionMark />),
          url: 'http://localhost:8080/',
          type: 'EXTERNAL',
        },
        {
          text: 'Notifications',
          icon: (<IconOutlineQuestionMark />),
          url: 'http://localhost:8080/',
          type: 'EXTERNAL',
        },
      ],
      userName: 'John Snow',
      avatar: (<IconPerson />),
      signoutUrl: 'http://localhost:8080/',
    },

    helpItems: [
      {
        text: 'Technical Questions',
        url: 'http://localhost:8080/',
        type: 'EXTERNAL',
        icon: (<IconOutlineQuestionMark />),
        children: [{
          text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
          url: 'http://localhost:8080/',
          type: 'EXTERNAL',
        }],
      },
      {
        text: 'Get Support ID',
        url: 'http://localhost:8080/',
        type: 'EXTERNAL',
        icon: (<IconOutlineQuestionMark />),
        children: [],
      },
    ],
    locale: 'en-US',
  };

  return (
    <Layout {...props} id="layout" />
  );
};

export default DefaultNav;
