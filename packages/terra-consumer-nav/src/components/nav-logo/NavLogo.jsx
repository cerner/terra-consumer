import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Card from 'terra-card';
import styles from './NavLogo.scss';
import SmartLink from '../smart-link/SmartLink';

const propTypes = {
  /**
   *  The url of the logo to be shown.
   */
  url: PropTypes.string,
  /**
   *  The alternate text that is read by screen readers are displayed if the image fails to load.
   */
  altText: PropTypes.string,
  /**
   * Whether or not the logo should be placed on top of a white card.
   */
  isCard: PropTypes.bool,
  /**
  * Props for a smartlink
  */
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    isExternal: PropTypes.bool,
  }),
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
  link,
  ...customProps
}) => {
  const imgProps = {
    className: cx('img'),
    ...url && { src: url },
  };

  const imgTag = (<img alt={altText} {...imgProps} />);
  const imgContent = (link) ? <SmartLink {...link}>{imgTag} </SmartLink> : imgTag;
  const body = (isCard && !!url) ? <Card.Body> {imgContent} </Card.Body> : imgContent;
  const domNode = (isCard && !!url) ? Card : 'div';
  const logoClassNames = cx(
    'logo-container',
    customProps.className,
  );

  return React.createElement(domNode, { ...customProps, className: logoClassNames }, body);
};

NavLogo.propTypes = propTypes;
NavLogo.defaultProps = defaultProps;

export default NavLogo;
