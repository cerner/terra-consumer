import React from 'react';
import Nav from '../../src/Nav';

const testData = {
  quickLinks: [{
    uri: '/test',
    text: 'test',
  }],
  navItems: [{
    uri: '#test',
    text: 'test',
    isActive: true,
  }],
  logo: {
    path: '',
    altText: 'test',
    isCard: false,
  },
  helpItems: [{
    text: 'Technical Questions',
    uri: 'http://localhost:8083/',
    children: [{
      text: 'Need help using this portal or need to report an issue? Contact the support team at 123-xxx-xxxx',
      uri: 'http://localhost:8083/',
    }],
  },
  {
    text: 'Get Support ID',
    uri: 'http://localhost:8083/',
    children: [],
  }],
  helpId: 'nav-help-button',
  profileLinks: [{
    text: 'Account',
    uri: 'http://localhost:8083/',
  },
  {
    text: 'Notifications',
    uri: 'http://localhost:8083/',
  }],
  userName: 'John Snow',
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
  it('should have the class nav-container', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('nav-container');
  });
});
