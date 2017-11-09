import React from 'react';
import SafeHtml from '../src/components/safe-html/SafeHtml';

const textWithSpecChars = '&#8235;\u0627\u0644\u0639\u0631\u0628\u064a\u0651\u0629 &#8236;';
const textWithoutSpecChar = 'English (United States)';

const SafeHtmlTest = () => (
  <div>
    <h3>Text without special character: English (United States)</h3>
    <hr />
    <SafeHtml text={textWithoutSpecChar} />
    <hr />
    <h3>Text with special character: &amp;#8235;\u0627\u0644\u0639\u0631\u0628\u064a\u0651\u0629 &amp;#8236;</h3>
    <hr />
    <SafeHtml text={textWithSpecChars} />
    <hr />
  </div>
);

export default SafeHtmlTest;
