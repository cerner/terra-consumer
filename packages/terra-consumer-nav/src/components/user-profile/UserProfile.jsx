import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import IconEllipses from 'terra-icon/lib/icon/IconEllipses';
import ProfileLinks from './ProfileLinks';
import navElementShape from '../../NavPropShapes';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

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
   * A unique id set to the profile popup button that will be referred in profile popup.
   */
  id: PropTypes.string.isRequired,
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
    */
  handleClick: PropTypes.func.isRequired,
  /**
   * Injected react-intl formatting api
   */
  intl: intlShape.isRequired,
};

const defaultProps = {
  profile: {
    avatar: null,
    profileLinks: [],
  },
};


class UserProfile extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { name, avatar, id, signoutUrl, profileLinks, handleClick, intl, ...customProps } = this.props;

    const content = (
      <div>
        <ProfileLinks linkItems={profileLinks} />
        <Button className={cx('link', 'signout-border')} href={signoutUrl}>
          <FormattedMessage id="nav_signout" />
        </Button>
      </div>
    );

    const title = intl.formatMessage({ id: 'nav_profile_title' });

    return (
      <div {...customProps} className={cx('profile')}>
        <Button className={cx('popup-button')} onClick={() => handleClick({ title, content })}>
          <Arrange
            fitStart={<svg className={cx('icon')}>{avatar}</svg>}
            fill={<div className={cx('profile-text-padding')}>{name}</div>}
            fitEnd={<IconEllipses className={cx('icon')} id={id} />}
            align="center"
          />
        </Button>
      </div>
    );
  }
}

UserProfile.propTypes = propTypes;
UserProfile.defaultProps = defaultProps;

export default injectIntl(UserProfile);
