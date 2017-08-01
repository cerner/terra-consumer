import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Toggler from 'terra-toggle';
import Arrange from 'terra-arrange';
import OutlineChevronDown from '../../icons/OutlineChevronDown';
import OutlineChevronUp from '../../icons/OutlineChevronUp';
import styles from './NavToggler.scss';

const cx = classNames.bind(styles);

const propTypes = {
  text: PropTypes.string,
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
  const toggleIcon = isOpen ? <OutlineChevronUp /> : <OutlineChevronDown />;

  return (
    <div className={cx(customProps.className)}>
      <button className={cx('toggle-header')} onClick={() => handleToggle(!isOpen)}>
        <Arrange
          align="stretch"
          fill={<span>{text}</span>}
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
