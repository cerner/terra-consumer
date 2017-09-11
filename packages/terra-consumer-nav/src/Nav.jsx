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
    this.handleOpenProfile = this.handleOpenProfile.bind(this);
  }

  handleOpenProfile(modalContent) {
    this.toggleModal(modalContent);
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
    const { navItems, profile, logo, onRequestClose, ...customProps } = this.props;
    const profileId = 'profile-popup-button';
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
      <div
        {...customProps}
        id="terra-consumer-nav"
        className={cx('nav', customProps.className)}
      >
        <Button icon={<IconClose />} className={cx('close-button')} onClick={() => { onRequestClose(); }} variant="link" />
        <NavLogo {...logo} />
        <NavItems navItems={navItems} />
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} medium={popup} />
        <div className={cx('profile')}>
          <UserProfile
            {...profile}
            id={profileId}
            handleClick={this.handleOpenProfile}
            isSignIn={profile.signinUrl && !(profile.avatar || profile.userName)}
          />
        </div>
      </div>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;
Nav.Help = NavHelp;
Nav.Burger = NavBurgerButton;
Nav.UserProfile = UserProfile;

export default Nav;
