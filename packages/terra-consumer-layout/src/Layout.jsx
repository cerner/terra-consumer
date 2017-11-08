import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Nav from 'terra-consumer-nav';
import ResponsiveElement from 'terra-responsive-element';
import Overlay from 'terra-overlay';
import { injectIntl, intlShape } from 'react-intl';
import 'terra-base/lib/baseStyles';
import styles from './Layout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
  * Object of configuration for the side navigation and profile.
  */
  nav: PropTypes.object.isRequired,
  /**
  * Array of links to show for the content of the help button
  */
  helpItems: PropTypes.array,
  /**

  * Alert banner
  */
  siteAlert: PropTypes.element,

   /* A center justified logo in header for mobile.
   */
  logo: PropTypes.shape({
    /**
     * A center justified logo in header for mobile.
     */
    mobileLogo: PropTypes.shape({
      url: PropTypes.string.isRequired,
      altText: PropTypes.string.isRequired,
    }),
    navLogo: PropTypes.object,
  }),

  /**
   * Injected react-intl formatting api
   */
  intl: intlShape.isRequired,
  children: PropTypes.node.isRequired,
};

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMobileNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isMobileNavOpen: !this.state.isMobileNavOpen,
    });
  }
  render() {
    const { nav, helpItems, logo, siteAlert, intl, ...customProps } = this.props;
    const overlay = (
      <Overlay
        onRequestClose={this.toggleNav}
        isOpen={this.state.isMobileNavOpen}
        backgroundStyle="clear"
        isRelativeToContainer
      />
    );

    let navConfig = nav;
    if (logo && logo.navLogo) {
      navConfig = Object.assign({}, nav, { logo: logo.navLogo });
    }

    return (
      <div className={cx('wrap')}>
        <div className={cx('skip-container')}>
          <a className={cx('skip-to-main-content')} href="#main-container" id="skip-maincontent-link">
            {intl.formatMessage({ id: 'Terra.Consumer.Layout.skipcontent' })}
          </a>
        </div>
        {siteAlert}
        <div {...customProps} className={cx('layout', { open: this.state.isMobileNavOpen }, customProps.className)}>
          <nav className={cx('nav')}>
            <Nav
              {...navConfig}
              onRequestClose={this.toggleNav}
            />
          </nav>
          <main id="main-container" className={cx('main-container')}>
            <ResponsiveElement defaultElement={overlay} responsiveTo="window" medium={<div />} />
            <div className={cx('main-container-inner')}>
              <div className={cx('nav-burgerbar')}>
                <Nav.Burger handleClick={this.toggleNav} />
                <div className={cx('mobile-logo')}>
                  {logo && logo.mobileLogo &&
                    <img src={logo.mobileLogo.url} alt={logo.mobileLogo.altText} />
                  }
                </div>
              </div>
              <div className={cx('main-content')}>{this.props.children}</div>
              <Nav.Help className={cx('help-button')} helpNavs={helpItems} id="nav-help-button" />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default injectIntl(Layout);
