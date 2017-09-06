import React from 'react';
import classNames from 'classnames/bind';
import navElementShape from '../../NavPropShapes';
import SmartLink from '../smart-link/SmartLink';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const propTypes = { ...navElementShape };

const ProfileLink = ({
  text,
  url,
  icon,
  target,
  isActive,
  isExternal,
  badgeValue,
  ...customProps
}) => (
  <SmartLink
    {...customProps}
    key={text}
    url={url}
    target={target}
    isExternal={isExternal}
    className={cx('link', 'profile-item-border', customProps.className)}
  >
    {text}
  </SmartLink>
);

ProfileLink.propTypes = propTypes;

export default ProfileLink;
