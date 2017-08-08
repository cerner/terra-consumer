import React from 'react';
import Popup from '../../../src/components/Popup/Popup';


const popupContent = <div> This is a test content</div>;
const mockFn = jest.fn();

describe('Modal', () => {
  // Snapshot Tests
  it('should render a pop with title,close button and content', () => {
    const wrapper = shallow(<Popup
      title="Title"
      hasHeader
      targetRef={mockFn}
      closePopup={mockFn}
      contentWidth="320"
      contentHeight="240"
      contentAttachment="middle center"
      popupContent={popupContent}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a pop without header(title & close button)', () => {
    const wrapper = shallow(<Popup
      title="Title"
      hasHeader={false}
      targetRef={mockFn}
      closePopup={mockFn}
      contentWidth="320"
      contentHeight="240"
      contentAttachment="middle center"
      popupContent={popupContent}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});

