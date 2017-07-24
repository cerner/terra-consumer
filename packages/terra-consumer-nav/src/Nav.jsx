import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Nav.scss';

const cx = classNames.bind(styles);

const propTypes = {
 /*
 * Content to be displayed as the name
 */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const Nav = ({ name, ...customProps }) => {
  const attributes = Object.assign({}, customProps);
  const NavClassNames = cx([
    'nav',
    attributes.className,
  ]);

  return (<div {...attributes} className={NavClassNames}>{name}</div>);
};

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
