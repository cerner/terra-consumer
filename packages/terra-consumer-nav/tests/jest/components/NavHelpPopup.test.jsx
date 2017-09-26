import React from 'react';
import NavHelpPopup from '../../../src/components/nav-help/NavHelpPopup';


const popupContent = <div> This is a test content</div>;
const mockFn = jest.fn();

describe('Popup', () => {
  // Snapshot Tests
  it('should render a pop with title,close button and content', () => {
    const wrapper = shallow(<NavHelpPopup
      title="Title"
      hasHeader
      targetRef={mockFn}
      closePopup={mockFn}
      contentWidth="320"
      contentHeight="240"
      contentAttachment="middle center"
      popupContent={popupContent}
      rowCount={1}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a popup without header(title & close button)', () => {
    const wrapper = shallow(<NavHelpPopup
      title="Title"
      hasHeader={false}
      targetRef={mockFn}
      closePopup={mockFn}
      contentWidth="320"
      contentHeight="240"
      contentAttachment="middle center"
      popupContent={popupContent}
      rowCount={1}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
