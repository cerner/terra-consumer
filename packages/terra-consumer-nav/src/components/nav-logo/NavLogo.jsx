import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Card from '../card/Card';
import styles from './NavLogo.scss';

const propTypes = {
  /**
   *  The url of the logo to be shown.
   */
  url: PropTypes.string.isRequired,
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
  url,
  altText,
  isCard,
  ...customProps
}) => {
  const image = <img className={cx('img')} src={url} alt={altText} />;
  const domNode = isCard ? Card : 'div';
  const logoClassNames = cx(
    'logo-container',
    customProps.className,
  );

  return React.createElement(domNode, { ...customProps, className: logoClassNames }, image);
};

NavLogo.propTypes = propTypes;
NavLogo.defaultProps = defaultProps;

export default NavLogo;
