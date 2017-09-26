import React from 'react';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import Nav from '../../src/Nav';
import I18nShell from './I18nShell';

const helpItems = [
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
    text: 'Another link 1',
    url: 'http://localhost:8080/',
  },
  {
    isExternal: true,
    text: 'Another link 2',
    url: 'http://localhost:8080/',
  },
  {
    isExternal: true,
    text: 'Another link 3',
    url: 'http://localhost:8080/',
  },
  {
    isExternal: true,
    text: 'Another link 4',
    url: 'http://localhost:8080/',
  },
];

export default () => (
  <I18nShell>
    {
      helpItems.map((item, index) => (
        <div>
          <h5>{index + 1} links</h5>
          <Nav.Help helpNavs={helpItems.slice(0, index + 1)} />
        </div>
        ))
    }
  </I18nShell>
);
