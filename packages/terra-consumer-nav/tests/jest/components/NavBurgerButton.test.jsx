import React from 'react';
import Nav from '../../../src/Nav';

const mockFn = jest.fn();

describe('Nav Burger', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<Nav.Burger handleClick={mockFn} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render accept custom props', () => {
    const wrapper = shallow(<Nav.Burger handleClick={mockFn} id="testId" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render accept custom classes', () => {
    const wrapper = shallow(<Nav.Burger handleClick={mockFn} className="testClass" />);
    expect(wrapper).toMatchSnapshot();
  });
});
