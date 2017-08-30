import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import { I18nProvider, i18nLoader } from 'terra-i18n';
import Nav from '../../src/Nav';
import NavHelp from '../../src/components/nav-help/NavHelp';
import styles from './Layout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  nav: PropTypes.object,
  helpItems: PropTypes.array,
  locale: PropTypes.string.isRequired,
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

    if (!this.state.areTranslationsLoaded) {
      return null;
    }

    return (
      <I18nProvider
        locale={this.state.locale}
        messages={this.state.messages}
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
            {/* Added a div to test the HelpButton relative to page content */}
            <div style={{ background: '#fff', height: '100%', width: 'inherit' }}>I am in the main content</div>
            <div className={cx('footer')}>
              <NavHelp helpNavs={helpItems} id="nav-help-button" />
            </div>
            <NavHelp className={cx('help-button-desktop')} helpNavs={helpItems} id="nav-help-button" />
          </div>
        </div>
      </I18nProvider>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
