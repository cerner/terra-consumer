import React from 'react';
import ProfileLinks from '../../../src/components/user-profile/ProfileLinks';
import IconInfo from '../../../src/icons/IconInfo';

const testData = [
  {
    text: 'Account',
    icon: (<IconInfo />),
    uri: 'http://localhost:8080/',
  },
  {
    text: 'Notifications',
    icon: (<IconInfo />),
    uri: 'http://localhost:8080/',
  },
];

describe('Profile Link items', () => {
  // Snapshot Tests
  it('should render a list of profile link items', () => {
    const wrapper = shallow(<ProfileLinks linkItems={testData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
