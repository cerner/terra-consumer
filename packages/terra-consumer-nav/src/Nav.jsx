import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HamburgerIcon from './icons/OutlineHamburger';
import HelpButton from './components/help-button/HelpButton';
import NavItem from './components/nav-items/NavItem';
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
      openToggle: null,
    };

    this.openMobileNav = this.openMobileNav.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  openMobileNav() {
    this.setState({
      isMobileNavOpen: true,
    });
  }

  handleToggle(i, isOpen) {
    this.setState({
      openToggle: isOpen ? i : null,
    });
  }

  render() {
    const { quickLinks, navItems, logo, ...customProps } = this.props;
    const mobileClass = this.state.isMobileNavOpen ? 'nav-mobile' : '';

    const quickLinkItems = quickLinks.map(element => <QuickLink {...element} key={element.text} />);

    const navItemsArray = navItems.map((element, i) => {
      let toggleProps = {};
      if (element.subItems) {
        const subNavs = element.subItems.map(item => <NavItem key={item.text} {...item} isSubNav />);
        toggleProps = {
          subNavs,
          isOpen: this.state.openToggle === i,
          handleToggle: this.handleToggle,
          toggleId: i,
        };
      }
      return (<NavItem key={element.text} {...element} {...toggleProps} />);
    });

    return (
      <div {...customProps}>
        <button className={cx('nav-burger')} onClick={this.openMobileNav}>
          <HamburgerIcon />
        </button>
        <HelpButton />
        {/* Make this into a Slide Component */}
        <div className={cx('nav', mobileClass)}>
          <NavLogo />
          <QuickLinks quickLinks={quickLinkItems} />
          <NavItems navItems={navItemsArray} />
          <NavProfile />
        </div>
      </div>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
