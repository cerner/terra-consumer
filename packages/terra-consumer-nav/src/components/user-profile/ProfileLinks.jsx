import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SmartLink from '../SmartLink/SmartLink';
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
      <SmartLink {...customProps} url={linkItem.url} target={linkItem.target} text={linkItem.text} key={linkItem.text} icon={linkItem.classIcon} className={cx('link', 'profile-item-border')} />,
      // <p>hello</p>,
    )}
    {/* <Button
    key={linkItem.text}
    href={linkItem.url}
    className={cx('link', 'profile-item-border')}
    text={linkItem.text}
    target={linkItem.target}
  /> */}
  </div>
);

ProfileLinks.propTypes = propTypes;
ProfileLinks.defaultProps = defaultProps;

export default ProfileLinks;
