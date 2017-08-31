import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const propTypes = {
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  isExternal: PropTypes.bool,
  activeClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  isExternal: false,
  target: '_self',
};

const SmartLink = ({
  url,
  target,
  isExternal,
  activeClass,
  children,
  ...customProps
}) => (
  (isExternal || target === '_blank') ?
    <a {...customProps} target={target} href={url}>{children}</a> :
    <NavLink
      {...customProps}
      exact
      activeClassName={activeClass}
      to={url}
    >{children}</NavLink>
  );

SmartLink.propTypes = propTypes;
SmartLink.defaultProps = defaultProps;

export default SmartLink;
