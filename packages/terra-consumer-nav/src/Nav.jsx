import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconClose from 'terra-icon/lib/icon/IconClose';
import TerraPopup from 'terra-popup';
import ResponsiveElement from 'terra-responsive-element';
import NavItems from './components/nav-items/NavItems';
import Modal from './components/modal/Modal';
import NavLogo from './components/nav-logo/NavLogo';
import NavHelp from './components/nav-help/NavHelp';
import NavBurgerButton from './components/nav-burger-button/NavBurgerButton';
import styles from './Nav.scss';
import UserProfile from './components/user-profile/UserProfile';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of objects to be displayed as nav link options.
   */
  navItems: PropTypes.array.isRequired,
  /**
  * Object representing all the profile information
  */
  profile: PropTypes.shape({
    signinUrl: PropTypes.string,
    avatar: PropTypes.element,
  }),
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
  navItems: [],
  profile: {},
  logo: {},
};

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
      modalContent: {
        title: '',
        content: <div />,
      },
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(modalObject) {
    if (modalObject.title && modalObject.content) {
      this.setState({
        modalContent: modalObject ||
          {
            title: '',
            content: <div />,
          },
      });
    }
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    const { navItems, profile, logo, isMobileNavOpen, onRequestClose, ...customProps } = this.props;
    const profileId = 'profile-popup-button';

    const willRenderProfile = profile.userName || profile.avatar || profile.signinUrl;

    const defaultElement = (
      <Modal
        isModalOpen={this.state.isModalOpen}
        title={this.state.modalContent.title}
        onRequestClose={this.toggleModal}
      >
        {this.state.modalContent.content}
      </Modal>
    );

    const popup = (
      <TerraPopup
        isOpen={this.state.isModalOpen}
        onRequestClose={this.toggleModal}
        targetRef={() => document.getElementById(profileId)}
        contentWidth="240"
        contentHeight="240"
        contentAttachment="top right"
        isArrowDisplayed
      >
        {this.state.modalContent.content}
      </TerraPopup>
    );

    return (
      <div className={cx(isMobileNavOpen && 'mobile-panel', 'container')} id="terra-consumer-nav">
        <div
          {...customProps}
          className={cx('nav', !willRenderProfile && 'no-profile', customProps.className)}
          aria-hidden={!isMobileNavOpen}
        >
          <Button icon={<IconClose />} className={cx('close-button')} onClick={() => { onRequestClose(); }} />
          <NavLogo {...logo} />
          <NavItems navItems={navItems} handleClick={onRequestClose} />
          { willRenderProfile &&
            <UserProfile
              {...profile}
              id={profileId}
              handleClick={(modalContent) => { this.toggleModal(modalContent); }}
              isSignIn={profile.signinUrl && !(profile.avatar || profile.userName)}
            />
          }
        </div>
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} medium={popup} />
      </div>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.Help = NavHelp;
Nav.Burger = NavBurgerButton;

export default Nav;
