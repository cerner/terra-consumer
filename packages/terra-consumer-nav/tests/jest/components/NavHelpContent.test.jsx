import React from 'react';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import NavHelpContent from '../../../src/components/nav-help/NavHelpContent';

const testData = [
  {
    text: 'Technical Questions',
    url: 'http://localhost:8080/',
    icon: (<IconOutlineQuestionMark height={16} width={16} />),
    children: [{
      text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
      uri: 'http://localhost:8080/',
    }],
  },
  {
    text: 'Get Support ID',
    url: 'http://localhost:8080/',
    icon: (<IconOutlineQuestionMark height={16} width={16} />),
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
