import React from 'react';
import Nav from '../../src/Nav';

const testData = {
  quickLinks: [{
    url: '/test',
    text: 'test',
  }],
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
  isMobileNavOpen: false,
  onRequestClose: () => {},
};

describe('Nav', () => {
  const defaultRender = <Nav {...testData} />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Structure Tests
  it('should have the class nav', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('nav');
  });
});
