import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Nav from 'terra-consumer-nav';
import { injectIntl, intlShape } from 'react-intl';
import styles from './Layout.scss';

const cx = classNames.bind(styles);

const propTypes = {

  /**
  * Object of configuration for the site alert.
  */
  siteAlert: PropTypes.string,

  /**
  * Object of configuration for the side navigation and profile.
  */
  nav: PropTypes.object.isRequired,
  /**
  * Array of links to show for the content of the help button
  */
  helpItems: PropTypes.array,
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
    const { nav, helpItems, siteAlert, intl, ...customProps } = this.props;
    return (
      <div>
        {
            siteAlert
              ? <div className={cx('site-alert')}>{ siteAlert }</div>
              : null
        }
        <div className={cx('skip-container')}>
          <a className={cx('skip-to-main-content')} href="#main-container" id="skip-maincontent-link">
            {intl.formatMessage({ id: 'Terra.Consumer.Layout.skipcontent' })}
          </a>
        </div>
        <div className={cx('layout', { 'site-alert-active': siteAlert }, customProps.className)} {...customProps}>
          <Nav
            {...nav}
            isMobileNavOpen={this.state.isMobileNavOpen}
            onRequestClose={this.toggleNav}
          />
          <main id="main-container" className={cx('main-container', this.state.isMobileNavOpen && 'nav-open')}>
            <Nav.Burger className={cx('nav-burger')} handleClick={this.toggleNav} />
            {this.props.children}
            <Nav.Help className={cx('help-button')} helpNavs={helpItems} id="nav-help-button" />
          </main>
        </div>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default injectIntl(Layout);
