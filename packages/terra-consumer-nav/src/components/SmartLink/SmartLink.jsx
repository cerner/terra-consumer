import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from 'terra-button';

const propTypes = {
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

const defaultProps = {
  type: '',
  target: '_self',
  buttonVariant: 'default',
};

const SmartLink = ({
  url,
  target,
  text,
  type,
  icon,
  buttonVariant,
  ...customProps
}) => {
  // if (!(type === 'EXTERNAL' || target === '_blank')) { debugger; }
  const button = <Button {...customProps} target={target} href={url} icon={icon} variant={buttonVariant} >{text}</Button>;
  const link = (type === 'EXTERNAL' || target === '_blank') ?
    button
    :
    // <NavLink {...customProps} target={target} to={url}>{button}{icon}</NavLink>;// activeClassName="is-active" />
    button;
    // <Button {...customProps} target={target} href={url} variant="link">{text}</Button>;
  return (
      link
  );
};

SmartLink.propTypes = propTypes;
SmartLink.defaultProps = defaultProps;

export default SmartLink;
