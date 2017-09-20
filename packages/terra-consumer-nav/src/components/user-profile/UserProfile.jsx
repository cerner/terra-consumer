import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import classNames from 'classnames/bind';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import IconEllipses from 'terra-icon/lib/icon/IconEllipses';
import IconOutlineUserCircle from 'terra-consumer-icon/lib/icon/IconOutlineUserCircle';
import ProfileLinks from './ProfileLinks';
import SafeHtml from '../safe-html/SafeHtml';
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
  /**
   * Determiniate of whether profile should render as signin link or profile button.
   */
  isSignIn: PropTypes.bool,
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
  avatar: <IconOutlineUserCircle />,
  profileLinks: [],
  isSignIn: false,
  id: 'terra-conumser-nav-profile-button',
};

const UserProfile = ({
  userName, avatar, id, signoutUrl, signinUrl, isSignIn, profileLinks, handleClick, intl, ...customProps
}) => {
  let profileContent;
  if (isSignIn) {
    profileContent = (
      <a className={cx('popup-button')} href={signinUrl}>
        <Arrange
          fitStart={<div className={cx('avatar')}>{avatar}</div>}
          fill={<FormattedMessage id="Terra.Consumer.UserProfile.signin" />}
          align="center"
        />
      </a>
    );
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
          fitStart={<div className={cx('avatar')}>{avatar}</div>}
          fill={<SafeHtml text={userName} />}
          fitEnd={<IconEllipses className={cx('icon')} id={id} />}
          alignFitStart="top"
          alignFill="center"
          alignFitEnd="top"
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
