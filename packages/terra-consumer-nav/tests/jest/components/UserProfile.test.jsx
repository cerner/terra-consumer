import React from 'react';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconInfo from '../../../src/icons/IconInfo';
import UserProfile from '../../../src/components/user-profile/ProfileLinks';

const profileLinks = [
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

describe('UserProfile', () => {
  // Snapshot Tests
  it('should render a user profile with avatar,name and popup button', () => {
    const wrapper = shallow(<UserProfile
      profileLinks={profileLinks}
      name="Frank Lampard"
      avatar={<IconPerson />}
      signoutUrl="http://localhost:8080/"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});