import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavItem.scss';

const cx = classNames.bind(styles);

const propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.element),
};

const defaultProps = {
  navItems: [],
};

const NavItems = ({
  navItems,
  ...customProps
}) => (
  <div className={cx('nav-items-contatiner')} {...customProps}>
    {navItems}
  </div>
);

NavItems.propTypes = propTypes;
NavItems.defaultProps = defaultProps;

export default NavItems;
