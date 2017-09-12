import React from 'react';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import UserProfile from '../../../src/components/user-profile/ProfileLinks';

const profileLinks = [
  {
    text: 'Account',
    icon: (<IconOutlineQuestionMark />),
    url: 'http://localhost:8080/',
  },
  {
    text: 'Notifications',
    icon: (<IconOutlineQuestionMark />),
    url: 'http://localhost:8080/',
  },
];

describe('UserProfile', () => {
  // Snapshot Tests
  it('should render a user profile with avatar, name and popup button', () => {
    const wrapper = shallow(<UserProfile
      profileLinks={profileLinks}
      userName="Anthony Martial"
      avatar={<IconPerson />}
      signoutUrl="http://localhost:8080/"
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a default avatar when none is provided', () => {
    const wrapper = shallow(<UserProfile userName="Test user" profileLinks={profileLinks} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as a signin link when a signinUrl and no user data is provided', () => {
    const wrapper = shallow(<UserProfile signinUrl="google.com" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as a signout link when no user data or signinUrl is provided', () => {
    const wrapper = shallow(<UserProfile signoutUrl="google.com" />);
    expect(wrapper).toMatchSnapshot();
  });
});
