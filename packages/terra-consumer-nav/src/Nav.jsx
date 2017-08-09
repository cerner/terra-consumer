import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconClose from 'terra-icon/lib/icon/IconClose';
import NavItems from './components/nav-items/NavItems';
import NavLogo from './components/nav-logo/NavLogo';
import NavProfile from './components/nav-profile/NavProfile';
import QuickLink from './components/quick-links/QuickLink';
import QuickLinks from './components/quick-links/QuickLinks';
import UserProfile from './components/user-profile/UserProfile';
import styles from './Nav.scss';

const cx = classNames.bind(styles);

const navItemShape = {
  /**
   * The path the nav item should lead to.
   */
  uri: PropTypes.string.isRequired,
  /**
   * The text displayed on the link.
   */
  text: PropTypes.string.isRequired,
  /**
   * Whether or not the link should be styled as active or not.
   */
  isActive: PropTypes.bool,
  /**
   * An optional badge. When supplied, displays the value inline, styled alongside the text.
   */
  badgeValue: PropTypes.number,
};

const propTypes = {
  /**
   * An array of objects to be displayed as quick link options.
   */
  quickLinks: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * The path the nav item should lead to.
       */
      uri: PropTypes.string.isRequired,
      /**
       * The text displayed on the link.
       */
      text: PropTypes.string.isRequired,
    }),
  ),
  /**
   * An array of objects to be displayed as nav link options.
   */
  navItems: PropTypes.arrayOf(
    PropTypes.shape(
      navItemShape,
      {
        /**
         * An optional array of objects to be displayed as sub navs toggled by the main nav.
         */
        subNavs: PropTypes.arrayOf(PropTypes.shape(navItemShape)),
      },
    ),
  ),

  helpItems: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    nav_type: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
    target: PropTypes.string,
    text: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    children: PropTypes.arrayOf(PropTypes.shape({
      slug: PropTypes.string,
      nav_type: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
      text: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
      children: PropTypes.array,
    })),
  })),
  profileLinks: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string,
    nav_type: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
    text: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  })),
  userName: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  signoutUrl: PropTypes.string.isRequired,
  /**
   * An object defining the logo to be displayed
   */
  logo: PropTypes.shape({
    /**
     * The location where the image to be displayed is stored.
     */
    path: PropTypes.string,
    /**
     * Alternate text used be screen readers.
     */
    altText: PropTypes.string,
    /**
     * Whether or not the logo should be placed on top of a white card.
     */
    isCard: PropTypes.bool,
  }),
  /**
   * Whether or not the nav should be visible on a mobile device.
   */
  isMobileNavOpen: PropTypes.bool.isRequired,
  /**
   * Callback function: should be used to close the nav on mobile devices.
   */
  onRequestClose: PropTypes.func.isRequired,
};

const defaultProps = {
  quickLinks: [],
  navItems: [],
  logo: {},
};

const Nav = ({
  quickLinks, navItems,helpItems,profileLinks,userName,avatar,signoutUrl,logo, isMobileNavOpen, onRequestClose, ...customProps
}) => (
  <div className={cx('nav-container')} {...customProps}>
    {/* Make this into a Slide Component */}
    <div className={cx('nav')} aria-hidden={!isMobileNavOpen}>
      <Button icon={<IconClose />} className={cx('close-button')} onClick={() => { onRequestClose(); }} />
      <NavLogo {...logo} />
      <QuickLinks>
        {quickLinks.map(element => <QuickLink {...element} key={element.text} />)}
      </QuickLinks>
      <NavItems navItems={navItems} />
      <UserProfile profileLinks={profileLinks} name={userName} avatar={avatar} signoutUrl={signoutUrl}  help={helpItems} />
    </div>
  </div>
);


Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
