import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import SafeHtml from '../safe-html/SafeHtml';
import navElementShape from '../../NavPropShapes';
import SmartLink from '../smart-link/SmartLink';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
  * An optional function. When supplied, gets triggered on link click.
  */
  handleClick: PropTypes.func,
  ...navElementShape,
};

const ProfileLink = ({
  text,
  url,
  target,
  isExternal,
  handleClick,
  ...customProps
}) => (
  <SmartLink
    {...customProps}
    url={url}
    target={target}
    isExternal={isExternal}
    className={cx('link', 'profile-item-border', customProps.className)}
    handleClick={handleClick}
  >
    <SafeHtml text={text} />
  </SmartLink>
);

ProfileLink.propTypes = propTypes;

export default ProfileLink;
