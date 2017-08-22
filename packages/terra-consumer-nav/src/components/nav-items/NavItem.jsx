import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavItem.scss';
import NavToggler from '../nav-toggler/NavToggler';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The path the nav item should lead to.
   */
  uri: PropTypes.string,
  /**
   * The text displayed on the link.
   */
  text: PropTypes.string,
  /**
   * Whether or not the link should be styled as active or not.
   */
  isActive: PropTypes.bool,
  /**
   * An optional badge. When supplied, displays the value inline, styled alongside the text.
   */
  badgeValue: PropTypes.number,
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
  uri,
  text,
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
    <div>
      {text}
      { badgeValue > 0 &&
        <div className={cx('badge')}>{badgeValue}</div>
      }
    </div>
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
    <a href={uri} className={cx('nav-item')}>
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
