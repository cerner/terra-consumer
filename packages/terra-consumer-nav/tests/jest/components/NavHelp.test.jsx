import React from 'react';
import NavHelp from '../../../src/components/nav-help/NavHelp';
import IconInfo from '../../../src/icons/IconInfo';

const helpItems = [
  {
    text: 'Technical Questions',
    uri: 'http://localhost:8083/',
    icon: (<IconInfo />),
    children: [{
      text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
      uri: 'http://localhost:8083/',
    }],
  },
  {
    text: 'Get Support ID',
    uri: 'http://localhost:8083/',
    icon: (<IconInfo />),
    children: [],
  },
];

describe('NavHelp button with pop/modal', () => {
  // Snapshot Tests
  it('should render a button with IconInfo,label and a pop/modal not opened', () => {
    const wrapper = shallow(<NavHelp help={helpItems} />);
    expect(wrapper).toMatchSnapshot();
  });
});
