import React from 'react';
import Nav from '../../src/Nav';

const testData = {
  navItems: [{
    url: '#test',
    text: 'test',
    isActive: true,
  }],
  logo: {
    url: '',
    altText: 'test',
    isCard: false,
  },
  profile: {
    profileLinks: [{
      text: 'Account',
      url: 'http://localhost:8080/',
    },
    {
      text: 'Notifications',
      url: 'http://localhost:8080/',
    }],
    userName: 'John Snow',
    profileId: 'profile-popup-button',
    signoutUrl: 'http://localhost:8080/',
  },
  isMobileNavOpen: false,
  onRequestClose: () => {},
};

describe('Nav', () => {
  const defaultRender = <Nav {...testData} />;
  const wrapper = shallow(defaultRender);

  // Snapshot Tests
  it('should render a default component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the id terra-consumer-nav', () => {
    expect(wrapper.prop('id')).toContain('terra-consumer-nav');
  });

  it('should have have the profile component', () => {
    expect(wrapper.find('.profile').exists()).toEqual(true);
  });
});

describe('Nav without profile', () => {
  const { profile, currentURL, ...data } = testData;
  const wrapper = shallow(<Nav {...data} />);

  // Snapshot Tests
  it('should render a nav without a profile component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have not have the profile component', () => {
    expect(wrapper.find('.profile').exists()).toEqual(false);
  });
});
