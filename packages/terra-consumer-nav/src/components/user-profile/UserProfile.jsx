import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import IconEllipses from 'terra-icon/lib/icon/IconEllipses';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import ProfileLinks from './ProfileLinks';
import navElementShape from '../../NavPropShapes';
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
  profileLinks: PropTypes.arrayOf(
    PropTypes.shape(
      navElementShape,
    ),
  ),
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
  avatar: <IconPerson />,
  profileLinks: [],
  isSignIn: false,
  id: '--terra-conumser--nav-profile-button',
};

const UserProfile = ({
  userName, avatar, id, signoutUrl, signinUrl, isSignIn, profileLinks, handleClick, intl, ...customProps
}) => {
  let ret;
  if (isSignIn) {
    ret = (
      <Button className={cx('popup-button')} href={signinUrl}>
        <Arrange
          fitStart={<div className={cx('avatar')}>{avatar}</div>}
          fill={<FormattedMessage id="nav_signin" />}
          align="center"
        />
      </Button>
    );
  } else {
    const content = (
      <div>
        <ProfileLinks linkItems={profileLinks} />
        <Button className={cx('link', 'signout-border')} href={signoutUrl}>
          <FormattedMessage id="nav_signout" />
        </Button>
      </div>
    );

    const title = intl.formatMessage({ id: 'nav_profile_title' });

    ret = (
      <Button className={cx('popup-button')} onClick={() => handleClick({ title, content })}>
        <Arrange
          fitStart={<div className={cx('avatar')}>{avatar}</div>}
          fill={<span>{userName}</span>}
          fitEnd={<IconEllipses className={cx('icon')} id={id} />}
          align="center"
        />
      </Button>
    );
  }

  return (
    <div {...customProps} className={cx('profile')}>
      {ret}
    </div>
  );
};

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default injectIntl(UserProfile);
