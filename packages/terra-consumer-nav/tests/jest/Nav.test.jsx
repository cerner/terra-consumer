import React from 'react';
import Nav from '../../src/Nav';

const testData = [{
  uri: '/test',
  text: 'test',
  isActive: false,
}];

describe('Nav', () => {
  const defaultRender = <Nav navItems={testData} />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.nav').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class nav', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('layout');
  });
});
