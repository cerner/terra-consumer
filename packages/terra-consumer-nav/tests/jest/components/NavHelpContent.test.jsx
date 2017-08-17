import React from 'react';
import IconInfo from '../../../src/icons/IconInfo';
import NavHelpContent from '../../../src/components/nav-help/NavHelpContent';

const testData = [
  {
    text: 'Technical Questions',
    uri: 'http://localhost:8080/',
    icon: (<IconInfo />),
    children: [{
      text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
      uri: 'http://localhost:8080/',
    }],
  },
  {
    text: 'Get Support ID',
    uri: 'http://localhost:8080/',
    icon: (<IconInfo />),
    children: [],
  },
];

describe('Content of the Help Modal/Popup', () => {
  // Snapshot Tests
  it('should render a list of items with/without toggler', () => {
    const wrapper = shallow(<NavHelpContent helpContent={testData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
