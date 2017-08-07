import React from 'react';
import QuickLink from '../../../src/components/quick-links/QuickLink';

const testData = {
  uri: '#testPath',
  text: 'testIcon',
};

describe('QuickLink', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(<QuickLink {...testData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should apply custom classes', () => {
    const wrapper = shallow(<QuickLink {...testData} className="test-class" />);
    expect(wrapper).toMatchSnapshot();
  });
});
