import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import ResponsiveElement from 'terra-responsive-element';
import IconEllipses from 'terra-icon/lib/icon/IconEllipses';
import Popup from 'terra-popup';
import Modal from '../modal/Modal';
import ProfileLinks from './ProfileLinks';
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

    const defaultElement = (
      <Modal
        isModalOpen={this.state.isOpen}
        title={translations.settings}
        content={<div><ProfileLinks linkItems={profileLinks} />
          {signout}</div>}
        closeModal={this.togglePopup}
      />);

    const large = (
      <Popup
        isOpen={this.state.isOpen}
        onRequestClose={this.togglePopup}
        targetRef={() => document.getElementById('profile-link-button')}
        contentWidth="240"
        contentHeight="240"
        contentAttachment="top right"
        isArrowDisplayed
      >
        <div>
          <ProfileLinks linkItems={profileLinks} />
          {signout}
        </div>
      </Popup>
      );

    return (
      <div {...customProps} className={cx('profile')}>
        <button className={cx('popup-button')}  onClick={() => this.togglePopup()}>
          <Arrange
            fitStart={<svg className={cx('icon')}>{avatar}</svg>}
            fill={<div className={cx('profile-text-padding')}>{name}</div>}
            fitEnd={<svg className={cx('icon')} id="profile-link-button"><IconEllipses /></svg>}
            align="center"
          />
        </button>
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} medium={large} large={large} />
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;
