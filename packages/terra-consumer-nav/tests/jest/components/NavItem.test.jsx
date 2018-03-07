import React from 'react';
import NavItem from '../../../src/components/nav-items/NavItem';

const testData = {
  url: '#testPath',
  text: 'testIcon',
  isActive: false,
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

  describe('badge', () => {
    it('should render when a number > 0 is provided', () => {
      const wrapper = shallow(<NavItem {...testData} badgeValue={1} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render when a string is provided', () => {
      const wrapper = shallow(<NavItem {...testData} badgeValue="!" />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});

describe('Nav Item as Toggler', () => {
  // Snapshot Tests
  it('should render a nav as a toggle component', () => {
    const wrapper = shallow(<NavItem {...testData} {...toggleData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
