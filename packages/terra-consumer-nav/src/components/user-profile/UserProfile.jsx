import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import Grid from 'terra-grid';
import Popup from 'terra-popup';
import Overlay from 'terra-overlay';
import ResponsiveElement from 'terra-responsive-element';
import CloseIcon from '../../icons/CloseIcon';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const translations = {
  signout: 'Sign Out',
  settings: 'Settings',
  help: 'Help',
};
const propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]).isRequired,
    avatar: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    signoutUrl: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      slug: PropTypes.string,
      nav_type: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
      text: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
    }),
  ),
  }),
};

const defaultProps = {
  profile: {
    avatar: null,
    links: [],
  },
};


class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  openPopup() {
    this.setState({ isOpen: true });
  }

  closePopup() {
    this.setState({ isOpen: false });
  }

  render() {
    const { profile, ...customProps } = this.props;
    const profileLinks = profile.links.map((item) => {
      const currentItem = (profile.links.length > 0 &&
        <Arrange
          align="stretch"
          fitStart={<div className={cx('icon')}>{item.icon}</div>}
          fill={<div className={cx('padding-left-small')}>{item.text}</div>}
        />
      );

      return (
        <a href={item.uri} onClick={() => window.location = item.uri} className={cx('suppress-hyperlink')}>
          <div key={`${item.text}`} className={cx('link')}>
            {currentItem}
          </div>
        </a>  
      );

    });

    const defaultElement = (
      <Overlay isOpen={this.state.isOpen} backgroundStyle="dark" isScrollable>
        <div>
          <Grid className={cx('modal-header')}>
            <Grid.Row>
              <Grid.Column col={2}>               
              </Grid.Column>
              <Grid.Column col={8}>
                <div className={cx('modal-title')}>{translations.settings}</div>
              </Grid.Column>
              <Grid.Column className={cx('text-align-right')} col={2}>
                <button className={cx('close-button')} onClick={() => this.closePopup()}>{<div className={cx('close-icon')}><CloseIcon /></div>}</button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className={cx('modal')}>
          {(<div>
            {profileLinks}
            <a 
              className={cx('suppress-hyperlink')}
              href={profile.signoutUrl}
              onClick={() => window.location = profile.signoutUrl}
            >
            <div className={cx('link', 'divider-bottom')}>
               {translations.help}
            </div>
            </a>
            <a
              className={cx('suppress-hyperlink')}
              href={profile.signoutUrl}
              onClick={() => window.location = profile.signoutUrl}
            >
            <div className={cx('link')}>
              {translations.signout}
            </div>
            </a>
          </div>)}
        </div>
      </Overlay>);

    const large = (
      <Popup
        isOpen={this.state.isOpen}
        onRequestClose={this.closePopup}
        targetRef={() => document.getElementById('profile-link-icon')}
        isArrowDisplayed
        contentWidth="320"
        contentHeight="400"
        contentAttachment="top right"
      >
        {<div>
          {profileLinks}
          <div>
            <a className={cx('link')} href={profile.signoutUrl} onClick={() => window.location = profile.signoutUrl}>
              {translations.help}
            </a>
          </div>
          <div>
            <a className={cx('link')} href={profile.signoutUrl} onClick={() => window.location = profile.signoutUrl}>
              {translations.signout}
            </a>
          </div>
        </div>
        }
      </Popup>);

    return (
      <div {...customProps}>
        <Arrange
          className={cx('profile')}
          fitStart={<svg className={cx('icon')}>{profile.avatar}</svg>}
          fill={<div className={cx('padding-left-small')}>{profile.name}</div>}
          fitEnd={<a id="profile-link-icon" onClick={this.openPopup}><svg className={cx('icon')} role="button">{profile.icon}</svg></a>}
          align="center"
        />
        <ResponsiveElement responsiveTo="window" defaultElement={defaultElement} large={large} />
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default UserProfile;
