import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Arrange from 'terra-arrange';
import styles from './NavItem.scss';
import NavToggler from '../nav-toggler/NavToggler';
import navItemShape from '../../NavPropShapes';

const cx = classNames.bind(styles);

const propTypes = {
  ...navItemShape,
  /**
   * The id of the toggle component to be toggled.
   */
  toggleId: PropTypes.number,
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
  isActive: false,
  handleToggle: () => {},
};

const NavItem = ({
  url,
  text,
  icon,
  target,
  isActive,
  badgeValue,
  toggleId,
  handleToggle,
  isOpen,
  children,
  ...customProps
}) => {
  const activeClass = cx({
    active: isActive,
  });

  const itemText = (
    <Arrange
      fitStart={icon ? <span className={cx('nav-item-icon')}>{icon}</span> : null}
      fill={
        <div className={cx(icon && 'nav-item-text')}>
          {text}
          { badgeValue > 0 &&
            <div className={cx('badge')}>{badgeValue}</div>
          }
        </div>
      }
    />
  );

  const currentItem = (children && children.length > 0) ?
    (<NavToggler
      header={itemText}
      handleToggle={open => handleToggle(toggleId, open)}
      isOpen={isOpen}
      className={cx('nav-item')}
    >
      {children}
    </NavToggler>)
  :
  (<div className={activeClass}>
    <a href={url} target={target} className={cx('nav-item', 'nav-item-link')}>
      {itemText}
    </a>
  </div>);

  return (
    <div {...customProps} className={cx('nav-item-wrapper', customProps.className)}>
      {currentItem}
    </div>
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
