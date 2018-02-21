import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import styles from './NavBurgerButton.scss';

const cx = classNames.bind(styles);

const propTypes = {
  handleClick: PropTypes.func.isRequired,
};

const NavBurger = ({
  handleClick,
  ...customProps
}) => (
  <Button
    {...customProps}
    onClick={handleClick}
    icon={<IconMenu />}
    variant="utility"
    text="Open Navbar"
    className={cx('burger', customProps.className)}
  />
);

NavBurger.propTypes = propTypes;
export default NavBurger;
