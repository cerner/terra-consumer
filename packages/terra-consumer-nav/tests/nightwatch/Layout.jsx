import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import { I18nProvider, i18nLoader } from 'terra-i18n';
import Messages from '../../src/i18n/translations/messages.json';
import Nav from '../../src/Nav';
import NavHelp from '../../src/components/nav-help/NavHelp';
import styles from './Layout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  nav: PropTypes.object,
  helpItems: PropTypes.array,
  locale: PropTypes.oneOf(['en', 'en-GB', 'en-US', 'es']).isRequired,
};

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileNavOpen: false,
      areTranslationsLoaded: false,
      locale: props.locale,
      messages: {},
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    i18nLoader(this.props.locale, this.setState, this);
  }

  toggleNav() {
    this.setState({
      isMobileNavOpen: !this.state.isMobileNavOpen,
    });
  }

  render() {
    const { nav, helpItems, locale, ...customProps } = this.props;
    return (
      <I18nProvider
        locale={this.state.locale}
        messages={Object.assign({}, this.state.messages, Messages[this.state.locale])}
      >
        <div className={cx('layout', customProps.className)} {...customProps}>
          <div className={cx('nav-container')}>
            <Nav
              {...nav}
              isMobileNavOpen={this.state.isMobileNavOpen}
              onRequestClose={this.toggleNav}
            />
          </div>
          <div className={cx('main-container')}>
            <button className={cx('nav-burger')} onClick={this.toggleNav}>
              <IconMenu />
            </button>
            <div style={{ background: '#fff', height: '100%', width: 'inherit' }}>I am in the main content</div>
            <NavHelp helpNavs={helpItems} id="nav-help-button" className={cx('help-button')} />
          </div>
        </div>
      </I18nProvider>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
