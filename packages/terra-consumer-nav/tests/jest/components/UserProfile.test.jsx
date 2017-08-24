import React from 'react';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import UserProfile from '../../../src/components/user-profile/ProfileLinks';

const profileLinks = [
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
