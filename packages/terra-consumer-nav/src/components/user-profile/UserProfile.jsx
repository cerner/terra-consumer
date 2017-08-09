import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import ResponsiveElement from 'terra-responsive-element';
import IconEllipses from 'terra-icon/lib/icon/IconEllipses';
import Popup from '../popup/Popup';
import Modal from '../modal/Modal';
import ProfileLinks from './ProfileLinks';
import HelpModal from './HelpModal';
import navElementShape from '../../NavPropShapes';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const translations = {
  signout: 'Sign Out',
  settings: 'Settings',
  help: 'Help',
};

const propTypes = {
  /**
   * User name to be displayed in profile.
   */
  name: PropTypes.string.isRequired,
  /**
   * Avatar to be displayed in profile.
   */
  avatar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /**
   * The path signout button would redirect to.
   */
  signoutUrl: PropTypes.string.isRequired,
  /**
   * The content of the each profile items.
   */
  profileLinks: PropTypes.arrayOf(PropTypes.shape(
    navElementShape)),
  /**
   * An array of items to be displayed as help modal.
   */
  help: PropTypes.arrayOf(PropTypes.shape(
    navElementShape,
    {
      children: PropTypes.arrayOf(PropTypes.shape(
      navElementShape,
        {
          children: PropTypes.array,
        },
      )),
    },
  )),
};

const defaultProps = {
  profile: {
    avatar: null,
    profileLinks: [],
    help: [],
  },
};


class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      showModal: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  togglePopup() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleModal() {
    this.setState({ isOpen: false, showModal: !this.state.showModal });
  }

  render() {
    const { name, avatar, signoutUrl, profileLinks, help, ...customProps } = this.props;

    const signout = (
      <button
        className={cx('link', 'signout-border')}
        href={signoutUrl}
        onClick={() => { window.location = signoutUrl; }}
      >
        <div className={cx('link-text')}>
          {translations.signout}
        </div>
      </button>);

    const helpElement = (
      <button
        className={cx('link')}
        onClick={() => this.toggleModal()}
      >
        <div className={cx('link-text')}>
          {translations.help}
        </div>
      </button>

      );

    const defaultElement = (
      <Modal
        isModalOpen={this.state.isOpen}
        title={translations.settings}
        content={<div><ProfileLinks linkItems={profileLinks} />
          {helpElement}
          {signout}</div>}
        closeModal={this.togglePopup}
      />);

    const large = (
      <Popup
        isOpen={this.state.isOpen}
        closePopup={this.togglePopup}
        targetRef={() => document.getElementById('profile-link-button')}
        isArrowDisplayed
        contentWidth="320"
        contentHeight="240"
        contentAttachment="top right"
        popupContent={<div>
          <ProfileLinks linkItems={profileLinks} />
          {signout}
        </div>}
      />);

    return (
      <div {...customProps}>
        <Arrange
          className={cx('profile')}
          fitStart={<svg className={cx('icon')}>{avatar}</svg>}
          fill={<div className={cx('profile-text-padding')}>{name}</div>}
          fitEnd={<button className={cx('popup-button')} id="profile-link-button" onClick={() => this.togglePopup()}><svg className={cx('icon')}><IconEllipses /></svg></button>}
          align="stretch"
        />
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} large={large} />
        <HelpModal help={help} isOpen={this.state.showModal} closeModal={this.toggleModal} />
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;
