import React from 'react';
import QuickLinks from '../../../src/components/quick-links/QuickLinks';

describe('QuickLinks', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<QuickLinks />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a component with children', () => {
    const wrapper = shallow(
      <QuickLinks>
        <div>Item</div>
      </QuickLinks>,
      );
    expect(wrapper).toMatchSnapshot();
  });

  it('should apply custom classes', () => {
    const wrapper = shallow(<QuickLinks className="test-class" />);
    expect(wrapper).toMatchSnapshot();
  });
});
