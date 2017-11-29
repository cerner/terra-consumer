import React from 'react';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import NavHelp from '../src/components/nav-help/NavHelp';

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
];

export default () => (
  <NavHelp helpNavs={helpItems} />
);
