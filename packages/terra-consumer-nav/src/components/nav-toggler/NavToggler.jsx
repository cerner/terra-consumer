import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Toggler from 'terra-toggle';
import Arrange from 'terra-arrange';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import IconChevronUp from 'terra-icon/lib/icon/IconChevronUp';
import styles from './NavToggler.scss';

const cx = classNames.bind(styles);

const propTypes = {
  text: PropTypes.element,
  subItems: PropTypes.arrayOf(PropTypes.element),
  handleToggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

const defaultProps = {
  isOpen: false,
};

const NavToggler = ({
  text,
  subItems,
  handleToggle,
  isOpen,
  ...customProps
}) => {
  const toggleIcon = isOpen ? <IconChevronUp /> : <IconChevronDown />;

  return (
    <div {...customProps}>
      <button className={cx('toggle-header')} onClick={() => handleToggle(!isOpen)}>
        <Arrange
          alignFill="stretch"
          alignFitEnd="center"
          fill={text}
          fitEnd={toggleIcon}
        />
      </button>
      <Toggler isOpen={isOpen} isAnimated className={cx('toggler')}>
        {subItems}
      </Toggler>
    </div>
  );
};

NavToggler.propTypes = propTypes;
NavToggler.defaultProps = defaultProps;

export default NavToggler;
