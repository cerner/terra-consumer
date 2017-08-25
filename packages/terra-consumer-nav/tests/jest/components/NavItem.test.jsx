import React from 'react';
import NavItem from '../../../src/components/nav-items/NavItem';

const testData = {
  url: '#testPath',
  text: 'testIcon',
  isActive: false,
  badgeValue: 0,
};

const toggleData = {
  toggleId: 1,
  handleToggle: () => {},
  isOpen: false,
  children: <div>test</div>,
};

describe('Nav Item', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<NavItem {...testData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should apply custom classes', () => {
    const wrapper = shallow(<NavItem {...testData} className="test-class" />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Nav Item as Toggler', () => {
  // Snapshot Tests
  it('should render a nav as a toggle component', () => {
    const wrapper = shallow(<NavItem {...testData} {...toggleData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
