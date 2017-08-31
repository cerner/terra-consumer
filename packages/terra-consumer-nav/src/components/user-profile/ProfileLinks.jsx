import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SmartLink from '../smart-link/SmartLink';
import navElementShape from '../../NavPropShapes';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of nav items to be displayed on the user profile/ settings menu/popup.
   */
  linkItems: PropTypes.arrayOf(
    PropTypes.shape(navElementShape),
  ),
};

const defaultProps = {
  linkItems: [],
};

const ProfileLinks = ({
  linkItems,
  ...customProps
}) => (
  <div {...customProps}>
    { linkItems.map(linkItem =>
      <SmartLink
        key={linkItem.text}
        url={linkItem.url}
        isExternal={linkItem.isExternal}
        className={cx('link', 'profile-item-border')}
      >{linkItem.text}
      </SmartLink>)
    }
  </div>
);

ProfileLinks.propTypes = propTypes;
ProfileLinks.defaultProps = defaultProps;

export default ProfileLinks;
