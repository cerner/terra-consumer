import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconClose from 'terra-icon/lib/icon/IconClose';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import HelpButton from './components/help-button/HelpButton';
import NavItems from './components/nav-items/NavItems';
import NavLogo from './components/nav-logo/NavLogo';
import NavProfile from './components/nav-profile/NavProfile';
import QuickLink from './components/quick-links/QuickLink';
import QuickLinks from './components/quick-links/QuickLinks';
import styles from './Nav.scss';

const cx = classNames.bind(styles);

const propTypes = {
  // expand object shape
  quickLinks: PropTypes.arrayOf(PropTypes.object),
  navItems: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    path: PropTypes.string,
    altText: PropTypes.string,
    isCard: PropTypes.bool,
  }),
};

const defaultProps = {
  quickLinks: [],
  navItems: [],
};

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      isMobileNavOpen: false,
    };

    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  toggleMobileNav() {
    this.setState({
      isMobileNavOpen: !this.state.isMobileNavOpen,
    });
  }

  render() {
    const { quickLinks, navItems, logo, ...customProps } = this.props;

    return (
      <div className={cx('nav-container')} {...customProps} tabIndex={-1}>
        {/* Move to Layout? */}
        <button className={cx('nav-burger')} onClick={this.toggleMobileNav}>
          <IconMenu />
        </button>
        <HelpButton />
        {/* Make this into a Slide Component */}
        <div className={cx('nav')} aria-hidden={!this.state.isMobileNavOpen} tabIndex={-1}>
          <Button icon={<IconClose />} className={cx('close-button')} onClick={this.toggleMobileNav} />
          <NavLogo />
          <QuickLinks>
            {quickLinks.map(element => <QuickLink {...element} key={element.text} />)}
          </QuickLinks>
          <NavItems navItems={navItems} />
          <NavProfile />
        </div>
      </div>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
