import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Card from '../card/Card';
import styles from './NavLogo.scss';

const propTypes = {
  /**
   *  The url of the logo to be shown.
   */
  url: PropTypes.string,
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
  let logoContent;
  if (url) {
    logoContent = <img className={cx('img')} src={url} alt={altText} />;
  } else {
    logoContent = (<p className={cx('logo-text')}>{altText}</p>);
  }
  const domNode = (isCard && !!url) ? Card : 'div';
  const logoClassNames = cx(
    'logo-container',
    customProps.className,
  );

  return React.createElement(domNode, { ...customProps, className: logoClassNames }, logoContent);
};

NavLogo.propTypes = propTypes;
NavLogo.defaultProps = defaultProps;

export default NavLogo;
