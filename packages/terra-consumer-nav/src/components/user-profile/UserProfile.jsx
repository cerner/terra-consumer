import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import classNames from 'classnames/bind';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import IconEllipses from 'terra-icon/lib/icon/IconEllipses';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import ProfileLinks from './ProfileLinks';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * User name to be displayed in profile if user is signed in.
   */
  userName: PropTypes.string,
  /**
   * Avatar to be displayed in profile.
   */
  avatar: PropTypes.element,
  /**
   * A unique id set to the profile popup button that will be referred in profile popup.
   */
  id: PropTypes.string,
  /**
   * The path signing out would redirect to. This link, when user data is available, will appear in the popup/modal, otherwise will display as the profile link itself.
   */
  signoutUrl: PropTypes.string.isRequired,
  /**
   * The path to the login page; this only gets displayed on the profile if no user information is provided along side this link
   */
  signinUrl: PropTypes.string,
  /**
   * The content of the each profile items.
   */
  profileLinks: PropTypes.array,
  /**
   * A function used as a callback to render modal and popup content.
   */
  handleClick: PropTypes.func.isRequired,
  /**
   * Injected react-intl formatting api
   */
  intl: intlShape.isRequired,
};

const defaultProps = {
  profileLinks: [],
  id: 'terra-conumser-nav-profile-button',
};

const UserProfile = ({
  userName, avatar, id, signoutUrl, signinUrl, profileLinks, handleClick, intl, ...customProps
}) => {
  let profileContent;
  const avatarIcon = <div className={cx('avatar')}>{avatar || <IconPerson />}</div>;

  const singleProfileLink = (url, translationId) => (
    <a href={url} className={cx('profile-text')}>
      <Arrange
        className={cx('popup-button')}
        fitStart={avatarIcon}
        fill={<FormattedMessage id={translationId} />}
        align="center"
      />
    </a>
  );

  /*
   * Logic tree:
   *  If no user infomation is available, specifically the avatar and username, then one of two things will happen.
   *   1: a signIn link was provided and therefore the sign IN option will be presented.
   *   2: no signIn link was provided and as such the sign OUT link will be presented.
   * Otherwise, the profile will display as normal with onclick opening the popup/modal depending on screensize,
   *   desktop/modal respectively.
   */
  if (!(avatar || userName)) {
    profileContent = signinUrl ?
      singleProfileLink(signinUrl, 'Terra.Consumer.UserProfile.signin')
    :
      singleProfileLink(signoutUrl, 'Terra.Consumer.UserProfile.signout');
  } else {
    const content = (
      <div>
        <ProfileLinks linkItems={profileLinks} />
        <a className={cx('link', 'signout-border')} href={signoutUrl}>
          <FormattedMessage id="Terra.Consumer.UserProfile.signout" />
        </a>
      </div>
    );

    const title = intl.formatMessage({ id: 'Terra.Consumer.UserProfile.Modal.title' });

    profileContent = (
      <button className={cx('popup-button')} onClick={() => handleClick({ title, content })}>
        <Arrange
          fitStart={avatarIcon}
          fill={<span>{userName}</span>}
          fitEnd={<IconEllipses className={cx('icon')} id={id} />}
          align="center"
        />
      </button>
    );
  }

  return (
    <div {...customProps} className={cx('profile')}>
      {profileContent}
    </div>
  );
};

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default injectIntl(UserProfile);
