import React from 'react';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import ProfileLinks from '../../../src/components/user-profile/ProfileLinks';

const testData = [
  {
    text: 'Account',
    icon: (<IconOutlineQuestionMark height={16} width={16} />),
    url: 'http://localhost:8080/',
  },
  {
    text: 'Notifications',
    icon: (<IconOutlineQuestionMark height={16} width={16} />),
    url: 'http://localhost:8080/',
  },
];

describe('Profile Link items', () => {
  // Snapshot Tests
  it('should render a list of profile link items', () => {
    const wrapper = shallow(<ProfileLinks linkItems={testData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
