import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { I18nProvider, i18nLoader } from 'terra-i18n';

const propTypes = {
  children: PropTypes.node.isRequired,
};

class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      areTranslationsLoaded: false,
      locale: 'en-US',
      messages: {},
    };
  }

  componentDidMount() {
    i18nLoader(this.state.locale, this.setState, this);
  }

  render() {
    if (!this.state.areTranslationsLoaded) {
      return null;
    }
    const { children } = this.props;
    return (
      <I18nProvider
        locale={this.state.locale}
        messages={this.state.messages}
      >
        {
          // Add some styles to the container to show off how layout would look
        }
        <div style={{ background: 'cadetblue', height: '100vh' }}>
          {children}
        </div>
      </I18nProvider>
    );
  }
}

DefaultLayout.propTypes = propTypes;

export default DefaultLayout;
