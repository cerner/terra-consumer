import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavLogo.scss';

const propTypes = {
  /**
   *  The path to where the image is located.
   */
  path: PropTypes.string,
  /**
   *  The alternate text that is read by screen readers.
   */
  altText: PropTypes.string,
  /**
   * Whether or not the logo should be placed on top of a white card.
   */
  isCard: PropTypes.bool,
};

const defaultProps = {
  path: 'http://placeholder.pics/svg/220x140/FF0606-FFFFFF',
  altText: 'Client Logo',
  isCard: false,
};

const cx = classNames.bind(styles);

const NavLogo = ({
  path,
  altText,
  isCard,
  ...customProps
}) => (
  <div className={cx('logo-container', isCard ? 'logo-card' : '')} {...customProps}>
    <img className={cx('img')} src={path} alt={altText} />
  </div>
);

NavLogo.propTypes = propTypes;
NavLogo.defaultProps = defaultProps;

export default NavLogo;
