import React from 'react';
import { I18nProvider } from 'terra-i18n';
import messages from '../../translations/en-US.json';
import Layout from '../../src/Layout';

describe('Layout', () => {
  const defaultRender = (
    <I18nProvider locale="en-US" messages={messages}>
      <Layout />
    </I18nProvider>
  );

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });
});
