import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
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
  <button
    {...customProps}
    onClick={handleClick}
    variant="utility"
    text="Open Navbar"
    className={cx('burger', 'button', customProps.className)}
  >
    <span className={cx('icon')}>
      <IconMenu />
    </span>
  </button>
);

NavBurger.propTypes = propTypes;
export default NavBurger;
