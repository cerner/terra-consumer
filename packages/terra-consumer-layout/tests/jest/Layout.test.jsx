import React from 'react';
import Layout from '../../src/Layout';

describe('Layout', () => {
  const defaultRender = <Layout />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.layout').text()).toEqual('defualt');
  });

  // Structure Tests
  it('should have the class layout', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('layout');
  });
});
