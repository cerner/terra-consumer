import React from 'react';
import IconOutlineQuestionMark from 'terra-consumer-icon/lib/icon/IconOutlineQuestionMark';
import ProfileLinks from '../../../src/components/user-profile/ProfileLinks';

const testData = [
  {
    text: 'Account',
    icon: (<IconOutlineQuestionMark height={16} width={16} />),
    url: 'http://localhost:8080/',
  },
  {
    text: 'Notifications',
    icon: (<IconOutlineQuestionMark height={16} width={16} />),
    url: 'http://localhost:8080/',
  },
  {
    isExternal: true,
    url: '#',
    text: 'English (United States)',
    subItems: [
      {
        'data-locale': 'ar',
        text: '\u0627\u0644\u0639\u0631\u0628\u064a\u0651\u0629',
        customOnClick: customOnClickMock,
      },
      {
        'data-locale': 'es',
        text: 'Espa\u00f1ol',
        customOnClick: customOnClickMock,
      },
      {
        'data-locale': 'en-gb',
        text: 'English (United Kingdom)',
        customOnClick: customOnClickMock,
      },
      {
        'data-locale': 'fr-fr',
        text: 'Fran\u00e7ais (France)',
        customOnClick: customOnClickMock,
      },
    ],
  },
];

describe('Profile Link items', () => {
  // Snapshot Tests
  it('should render a list of profile link items', () => {
    const wrapper = shallow(<ProfileLinks linkItems={testData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
