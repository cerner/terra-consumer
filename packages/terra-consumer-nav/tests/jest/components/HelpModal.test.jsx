import React from 'react';
import HelpModal from '../../../src/components/user-profile/HelpModal';
import IconInfo from '../../../src/icons/IconInfo';

const helpItems = [
  {
    text: 'Technical Questions',
    uri: 'http://localhost:8083/',
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

const mockFn = jest.fn();

describe('HelpModal with list of content items', () => {
  // Snapshot Tests
  it('should render a modal with title,close button and content', () => {
    const wrapper = shallow(<HelpModal help={helpItems} closeModal={mockFn} />);
    expect(wrapper).toMatchSnapshot();
  });
});
