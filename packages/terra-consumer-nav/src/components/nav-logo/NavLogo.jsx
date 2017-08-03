import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Card from '../card/Card';
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
  path: 'http://placeholder.pics/svg/190x120/FF0606-FFFFFF',
  altText: 'Client Logo',
  isCard: true,
};

const cx = classNames.bind(styles);

const NavLogo = ({
  path,
  altText,
  isCard,
  ...customProps
}) => {
  const image = <img className={cx('img')} src={path} alt={altText} />;

  return (
    <div className={cx('logo-container')} {...customProps}>
      { isCard ? <Card>{image}</Card> : image }
    </div>
  );
};

NavLogo.propTypes = propTypes;
NavLogo.defaultProps = defaultProps;

export default NavLogo;
