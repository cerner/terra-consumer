import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import ResponsiveElement from 'terra-responsive-element';
import IconEllipses from 'terra-icon/lib/icon/IconEllipses';
import Popup from '../Popup/Popup';
import Modal from '../Modal/Modal';
import ProfileLinks from './ProfileLinks';
import HelpModal from './HelpModal';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const translations = {
  signout: 'Sign Out',
  settings: 'Settings',
  help: 'Help',
};

const propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  signoutUrl: PropTypes.string.isRequired,
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
  help: PropTypes.arrayOf(PropTypes.shape({
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
      <a
        className={cx('link-text-style')}
        href={signoutUrl}
        onClick={() => { window.location = signoutUrl; }}
      >
        <div className={cx('link', 'signout-border')}>
          {translations.signout}
        </div>
      </a>);

    const helpElement = (
      <a
        className={cx('link-text-style')}
        onClick={() => this.toggleModal()}
        href="#modal"
      >
        <div className={cx('link')}>
          {translations.help}
        </div>
      </a>

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
