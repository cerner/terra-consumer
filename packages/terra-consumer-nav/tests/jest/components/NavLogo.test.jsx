import React from 'react';
import NavLogo from '../../../src/components/nav-logo/NavLogo';

const testData = {
  url: '#testPath',
  altText: 'testIcon',
};

describe('Nav Logo', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<NavLogo {...testData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a Card instead of a div when specified', () => {
    const wrapper = shallow(<NavLogo {...testData} isCard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should apply custom classes', () => {
    const wrapper = shallow(<NavLogo {...testData} className="test-class" />);
    expect(wrapper).toMatchSnapshot();
  });
});
