import React from 'react';
import NavItems from '../../../src/components/nav-items/NavItems';

const testData = {
  navItems: [{
    uri: '#testPath',
    text: 'testIcon',
    isActive: false,
    badgeValue: 0,
  }],
};

describe('Nav Items', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<NavItems {...testData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should apply custom classes', () => {
    const wrapper = shallow(<NavItems {...testData} className="test-class" />);
    expect(wrapper).toMatchSnapshot();
  });
});
