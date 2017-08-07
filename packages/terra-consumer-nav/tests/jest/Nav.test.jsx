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
