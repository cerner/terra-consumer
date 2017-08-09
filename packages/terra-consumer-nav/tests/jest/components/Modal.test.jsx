import React from 'react';
import Modal from '../../../src/components/modal/Modal';


const modalContent = <div> This is a test content</div>;
const mockFn = jest.fn();

describe('Modal', () => {
  // Snapshot Tests
  it('should render a modal with title,close button and content', () => {
    const wrapper = shallow(<Modal
      title="Modal Tittle"
      content={modalContent}
      closeModal={mockFn}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
