import React from 'react';
import PropTypes from 'prop-types';
import { I18nProvider, i18nLoader } from 'terra-i18n';
import { BrowserRouter } from 'react-router-dom';

const propTypes = {
  children: PropTypes.node.isRequired,
  useRouter: PropTypes.bool,
};

const defaultProps = {
  useRouter: false,
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
        {this.props.useRouter ? <BrowserRouter>{children}</BrowserRouter> : children}
      </I18nProvider>
    );
  }
}

DefaultLayout.propTypes = propTypes;
DefaultLayout.defaultProps = defaultProps;

export default DefaultLayout;
