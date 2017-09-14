import React from 'react';
import SafeHtml from '../../../src/components/safe-html/SafeHtml';


describe('Render texts with special characters', () => {
  // Snapshot Tests
  it('should render a html element using dangerouslySetInnerHTML without any special character', () => {
    const wrapper = shallow(<SafeHtml text="English (United States)" />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a html element using dangerouslySetInnerHTML with special characters ', () => {
    const wrapper = shallow(<SafeHtml text="&#8235;\u0627\u0644\u0639\u0631\u0628\u064a\u0651\u0629 &#8236;" />);
    expect(wrapper).toMatchSnapshot();
  });
});
