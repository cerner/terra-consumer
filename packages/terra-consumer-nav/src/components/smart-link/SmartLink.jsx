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
}) => (
  (isExternal || target === '_blank') ?
    <a {...customProps} onClick={handleClick} target={target} href={url}>{children}</a> :
    <NavLink
      {...customProps}
      exact
      activeClassName={activeClass}
      to={url}
      onClick={handleClick}
    >
      {children}
    </NavLink>
  );

SmartLink.propTypes = propTypes;
SmartLink.defaultProps = defaultProps;

export default SmartLink;
