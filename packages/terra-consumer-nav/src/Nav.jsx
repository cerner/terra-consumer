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
import QuickLink from './components/quick-links/QuickLink';
import QuickLinks from './components/quick-links/QuickLinks';
import styles from './Nav.scss';
import UserProfile from './components/user-profile/UserProfile';
import NavHelp from './components/nav-help/NavHelp';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of objects to be displayed as quick link options.
   */
  quickLinks: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
  /**
   * An array of objects to be displayed as nav link options.
   */
  navItems: PropTypes.array.isRequired,
  /**
   * An array of nav items to be displayed on the user profile/ settings menu/popup.
   */
  profileLinks: PropTypes.array.isRequired,
  /**
   * User name to be displayed in the profile in navigation.
   */
  userName: PropTypes.string.isRequired,
  /**
   * Avatar to be displayed in user profile in navigation.
   */
  avatar: PropTypes.PropTypes.element,
  /**
   * The path signout button would redirect to.
   */
  signoutUrl: PropTypes.string.isRequired,
  /**
   * An object defining the logo to be displayed
   */
  logo: PropTypes.object.isRequired,
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
  profileLinks: [],
  avatar: null,
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
    const { quickLinks, navItems, profileLinks, userName, avatar, signoutUrl, logo, isMobileNavOpen, onRequestClose, ...customProps } = this.props;
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
      <div className={cx('nav')}>
        <div {...customProps} className={cx('nav', customProps.className)} aria-hidden={!isMobileNavOpen}>
          <Button icon={<IconClose />} className={cx('close-button')} onClick={() => { onRequestClose(); }} />
          <NavLogo {...logo} />
          <QuickLinks>
            {quickLinks.map(element => <QuickLink {...element} key={element.text} />)}
          </QuickLinks>
          <NavItems navItems={navItems} />
          <UserProfile
            profileLinks={profileLinks}
            name={userName}
            avatar={avatar}
            id={profileId}
            signoutUrl={signoutUrl}
            handleClick={(modalContent) => { this.toggleModal(modalContent); }}
          />
        </div>
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} medium={popup} />
      </div>
    );
  }
}

Nav.propTypes = propTypes;
Nav.Help = NavHelp;
Nav.defaultProps = defaultProps;

export default Nav;
