import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import classNames from 'classnames/bind';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import Button from 'terra-button';
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
   * The path signout button would redirect to.
   */
  signoutUrl: PropTypes.string.isRequired,
  /**
   * The path to the login page.
   */
  signinUrl: PropTypes.string,
  isExternal: PropTypes.bool,
  target: PropTypes.string,
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
  userName, avatar, id, signoutUrl, signinUrl, isExternal, target, profileLinks, handleClick, intl, ...customProps
}) => {
  let profileContent;
  const avatarIcon = <div className={cx('avatar')}>{avatar || <IconPerson />}</div>;

  const setStaticProfile = (url, translationId) => (
    <Button className={cx('popup-button')} href={url}>
      <Arrange
        fitStart={avatarIcon}
        fill={<FormattedMessage id={translationId} />}
        align="center"
      />
    </Button>
  );

  if (signinUrl && !(avatar || userName)) {
    profileContent = setStaticProfile(signinUrl, 'Terra.Consumer.UserProfile.signin');
  } else if (!(avatar || userName || signinUrl)) {
    profileContent = setStaticProfile(signoutUrl, 'Terra.Consumer.UserProfile.signout');
  } else {
    const content = (
      <div>
        <ProfileLinks linkItems={profileLinks} />
        <button className={cx('link', 'signout-border')} href={signoutUrl}>
          <FormattedMessage id="Terra.Consumer.UserProfile.signout" />
        </button>
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
