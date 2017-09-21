import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const propTypes = {
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  isExternal: PropTypes.bool,
  activeClass: PropTypes.string,
  handleClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  isExternal: false,
  target: '_self',
  handleClick: () => {},
};

const SmartLink = ({
  url,
  target,
  isExternal,
  activeClass,
  handleClick,
  children,
  ...customProps
}) => {
  if (isExternal || target === '_blank') {
    return (
      <a {...customProps} onClick={handleClick} target={target} href={url}>{children}</a>
    );
  }
  const a = document.createElement('a');
  a.href = url;
    // fix for pathname quirk in IE : http://stackoverflow.com/questions/956233/javascript-pathname-ie-quirk
  const linkPath = a.pathname[0] === '/' ? a.pathname : `/${a.pathname}`;

  return (
    <NavLink
      {...customProps}
      exact
      activeClassName={activeClass}
      to={linkPath}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );
};


SmartLink.propTypes = propTypes;
SmartLink.defaultProps = defaultProps;

export default SmartLink;
