import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import navElementShape from '../../NavPropShapes';
import styles from './UserProfile.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * An array of nav items to be displayed on the user profile/ settings menu/popup.
   */
  linkItems: PropTypes.arrayOf(PropTypes.shape(
    navElementShape)),
};

const defaultProps = {
  linkItems: [],
};

const ProfileLinks = ({
  linkItems,
  ...customProps
}) => {
  const linkElements = linkItems.map((linkItem) => {
    const linkElement = (<button key={`${linkItem.text}`} href={linkItem.uri} onClick={() => { window.location = linkItem.uri; }} className={cx('link', 'nav-item-border')}>
      <div className={cx('link-text')}>{linkItem.text}</div></button>);
    return linkElement;
  });

  return (
    <div {...customProps}>
      {linkElements}
    </div>
  );
};

ProfileLinks.propTypes = propTypes;
ProfileLinks.defaultProps = defaultProps;

export default ProfileLinks;
