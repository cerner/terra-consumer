import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import Grid from 'terra-grid';
import Popup from 'terra-popup';
import Overlay from 'terra-overlay';
import ResponsiveElement from 'terra-responsive-element';
import ProfileLinks from './ProfileLinks';
import HelpModal from './HelpModal';
import CloseIcon from '../../icons/CloseIcon';
import OutlineEllipses from '../../icons/OutlineEllipses';
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
    this.showModal = false;
    this.openProfilePopup = this.openProfilePopup.bind(this);
    this.closeProfilePopup = this.closeProfilePopup.bind(this);
    this.openHelpModal = this.openHelpModal.bind(this);
    this.closeHelpModal = this.closeHelpModal.bind(this);
  }

  openProfilePopup() {
    this.setState({ isOpen: true });
  }

  closeProfilePopup() {
    this.setState({ isOpen: false });
  }

  openHelpModal() {
    this.setState({ isOpen: false, showModal: true });
  }

  closeHelpModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { name, avatar, signoutUrl, profileLinks, help, ...customProps } = this.props;

    const signout = (
      <a
        className={cx('suppress-hyperlink')}
        href={signoutUrl}
        onClick={() => window.location = signoutUrl}
      >
        <div className={cx('link', 'divider-top')}>
          {translations.signout}
        </div>
      </a>);

    const helpElement = (
      <a
        className={cx('suppress-hyperlink')}
        onClick={() => this.openHelpModal()}
      >
        <div className={cx('link')}>
          {translations.help}
        </div>
      </a>

      );

    const profileModalHeader = (
      <div>
        <Grid className={cx('modal-header')}>
          <Grid.Row>
            <Grid.Column col={2} />
            <Grid.Column col={8}>
              <div className={cx('modal-title')}>{translations.settings}</div>
            </Grid.Column>
            <Grid.Column className={cx('text-align-right')} col={2}>
              <button className={cx('close-button')} onClick={() => this.closeProfilePopup()}>
                {<div className={cx('close-icon')}><CloseIcon /></div>}
              </button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>);

    const defaultElement = (
      <Overlay isOpen={this.state.isOpen} backgroundStyle="dark">
        {profileModalHeader}
        <div className={cx('modal')}>
          <ProfileLinks linkItems={profileLinks} />
          {helpElement}
          {signout}
        </div>
      </Overlay>);

    const large = (
      <Popup
        isOpen={this.state.isOpen}
        onRequestClose={this.closeProfilePopup}
        targetRef={() => document.getElementById('profile-link-button')}
        isArrowDisplayed
        contentWidth="320"
        contentHeight="240"
        contentAttachment="top right"
      >
        <div>
          <ProfileLinks linkItems={profileLinks} />
          {signout}
        </div>
      </Popup>);

    return (
      <div {...customProps}>
        <Arrange
          className={cx('profile')}
          fitStart={<svg className={cx('icon')}>{avatar}</svg>}
          fill={<div className={cx('padding-left-small')}>{name}</div>}
          fitEnd={<button className={cx('popup-button')} id="profile-link-button" onClick={() => this.openProfilePopup()}><svg className={cx('icon')}><OutlineEllipses /></svg></button>}
          align="stretch"
        />
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} large={large} />
        <HelpModal help={help} isModalOpen={this.state.showModal} closeModal={this.closeHelpModal} />
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;
