import React from 'react';
import NavToggler from '../../../src/components/nav-toggler/NavToggler';

const testData = {
  header: <span>Test</span>,
  handleToggle: () => {},
  isOpen: false,
};

describe('Nav Toggler', () => {
  // Snapshot Tests
  it('should render a default component', () => {
    const component = (
      <NavToggler {...testData}>
        <div>
          <p>Test Sub element 1</p>
          <p>Test Sub element 2</p>
        </div>
      </NavToggler>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });

  it('should apply custom classes', () => {
    const component = (
      <NavToggler {...testData} className="test-class" >
        <div>test</div>
      </NavToggler>
    );
    const wrapper = shallow(component);
    expect(wrapper).toMatchSnapshot();
  });
});
