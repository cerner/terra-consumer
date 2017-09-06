import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../src/Layout';
import AppShellExample from './AppShellExample';

const data = {
  nav: {
    navItems: [
      {
        url: '/',
        text: 'Dashboard',
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
            text: 'Test',
          },
          {
            url: '/data',
            text: 'Data',
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
      {
        url: 'http://google.com',
        text: 'Google External',
        isExternal: true,
        target: '_blank',
      },
    ],
    logo: {
      url: 'https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/Olympic-logo.png',
      altText: 'Placeholder logo',
      isCard: false,
    },
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
      userName: 'John Snow',
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
};

export default () => (
  <AppShellExample useRouter>
    <Layout {...data}>
      <Route exact path="/" render={() => <h1>'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus velit in sem accumsan pellentesque. Praesent neque nibh, finibus ac faucibus in, laoreet et tellus. Pellentesque magna tellus, venenatis a nunc non, malesuada imperdiet dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non pulvinar tellus, sit amet mollis eros. Nulla facilisi. Pellentesque nisl tellus, lacinia id diam et, tincidunt consectetur neque. Quisque in lorem leo. Mauris varius ex molestie convallis maximus. Nunc vitae purus ultrices, ultrices eros eget, feugiat dui. Cras malesuada lectus ut massa porta elementum. Sed quis eros tincidunt sem interdum pretium ut at nibh.Aenean eget eros nec nisi pulvinar molestie. Sed feugiat nibh vel mauris rhoncus suscipit. Praesent bibendum enim nec orci blandit, quis eleifend lacus lacinia. Maecenas pretium aliquet felis vel semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent a orci vitae ex hendrerit tempor non a mi. In hac habitasse platea dictumst. Cras non ante in odio mattis ullamcorper. Ut nunc nibh, ullamcorper sed elementum sit amet, consectetur ut nibh. Fusce in turpis non nisl lacinia elementum. Etiam consequat euismod pharetra.Fusce sem arcu, tempor eu risus ut, pretium pharetra arcu. Duis enim justo, efficitur aliquam ornare eu, auctor at lacus. Donec dapibus aliquam elit, vel condimentum nunc facilisis in. Sed porttitor libero eget nulla ultricies commodo. In consequat neque et sem pretium, in ornare mi venenatis. Donec id euismod lacus, ut mollis tortor. Praesent eu molestie quam. In laoreet tellus nec arcu vehicula pharetra. Morbi maximus sit amet neque ut ullamcorper. In vel dui et justo dapibus posuere eu placerat nunc. Fusce commodo lectus ut vestibulum euismod. Mauris dui mauris, suscipit nec urna interdum, luctus tristique libero. Mauris id egestas urna. In rutrum condimentum erat sed tincidunt. Proin a tristique ipsum. Nullam aliquet faucibus justo, ac vulputate erat vulputate eget. Proin vitae mi posuere, sollicitudin tortor ac, hendrerit ligula. Nulla volutpat imperdiet consequat. Nullam porta elit ut tincidunt laoreet. Nullam dictum nulla quis ligula dapibus, vitae viverra mauris malesuada. Donec fringilla, tellus vel condimentum laoreet, mauris tortor faucibus libero, malesuada tincidunt risus arcu eu ante. In et felis suscipit, tincidunt nibh sed, rhoncus lectus. Phasellus vel ex feugiat, iaculis lacus eget, congue neque. Proin ligula nunc, facilisis a tincidunt in, interdum sollicitudin sem. Sed ligula mi, feugiat vel mi et, auctor hendrerit est. Morbi consectetur est sit amet urna condimentum egestas. Nulla ultrices lectus sit amet maximus rhoncus. Proin consequat scelerisque elit, id tempus tortor ornare nec.</h1>} />
      <Route exact path="/inbox" render={() => <h1>You have millions of unread messages</h1>} />
      <Route exact path="/sent" render={() => <h1>Opps, it is empty</h1>} />
      <Route exact path="/health" render={() => <h1>Game</h1>} />
      <Route exact path="/record" render={() => <h1>of Thrones</h1>} />
    </Layout>
  </AppShellExample>
);
