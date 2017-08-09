import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Card from '../card/Card';
import styles from './NavLogo.scss';

const propTypes = {
  /**
   *  The path to where the image is located.
   */
  path: PropTypes.string.isRequired,
  /**
   *  The alternate text that is read by screen readers or displayed if the image fails to load.
   */
  altText: PropTypes.string,
  /**
   * Whether or not the logo should be placed on top of a white card.
   */
  isCard: PropTypes.bool,
};

const defaultProps = {
  altText: 'Client Logo',
  isCard: false,
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
    <div {...customProps} className={cx('logo-container', customProps.className)}>
      { isCard ? <Card>{image}</Card> : image }
    </div>
  );
};

NavLogo.propTypes = propTypes;
NavLogo.defaultProps = defaultProps;

export default NavLogo;
