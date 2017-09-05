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
    text: 'Another link',
    url: 'http://localhost:8080/',
  },
];

export default () => (
  <I18nShell>
    <Nav.Help helpNavs={helpItems} />
  </I18nShell>
);
