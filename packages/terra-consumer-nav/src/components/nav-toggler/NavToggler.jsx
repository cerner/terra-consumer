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
  /**
   * Element to be displayed on top of the button that opens the toggle content.
   */
  header: PropTypes.element,

  /**
   * Function callback when the toggle component is clicked.
   */
  handleToggle: PropTypes.func.isRequired,

  /**
   * Whether or not the content should be toggled open or not.
   */
  isOpen: PropTypes.bool,

  /**
   * Items to be displayed within the toggler.
   */
  children: PropTypes.node,
};

const defaultProps = {
  isOpen: false,
};

const NavToggler = ({
  header,
  handleToggle,
  isOpen,
  children,
  ...customProps
}) => {
  const toggleIcon = isOpen ? <IconChevronUp /> : <IconChevronDown />;

  return (
    <div {...customProps}>
      <button className={cx('toggle-header')} onClick={() => handleToggle(!isOpen)}>
        <Arrange
          alignFill="stretch"
          alignFitEnd="center"
          fill={header}
          fitEnd={toggleIcon}
        />
      </button>
      <Toggler isOpen={isOpen} isAnimated className={cx('toggler')}>
        {children}
      </Toggler>
    </div>
  );
};

NavToggler.propTypes = propTypes;
NavToggler.defaultProps = defaultProps;

export default NavToggler;
