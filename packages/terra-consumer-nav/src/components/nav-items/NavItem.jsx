import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavItem.scss';
import NavToggler from '../nav-toggler/NavToggler';

const cx = classNames.bind(styles);

const propTypes = {
  slug: PropTypes.string,
  navType: PropTypes.oneOf(['grouping', 'external', 'application', 'modal']),
  target: PropTypes.string,
  uri: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  badgeValue: PropTypes.number,

  toggleId: PropTypes.number,
  handleToggle: PropTypes.func,
  isOpen: PropTypes.bool,
  /*
    TODO: Need to figure out what we are doing with icons or if navitems should even have icons

    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  */
  children: PropTypes.node,
};

const defaultProps = {
  isActive: false,
  handleToggle: () => {},
};

const NavItem = ({
  slug,
  navType,
  target,
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
  const activeClass = cx([
    { active: isActive },
  ]);

  const itemText = (
    <span>
      {text}
      { badgeValue > 0 &&
        <span className={cx('badge')}>{badgeValue}</span>
      }
    </span>
  );

  const currentItem = (children && children.length > 0) ?
    (<NavToggler
      text={itemText}
      subItems={children}
      handleToggle={open => handleToggle(toggleId, open)}
      isOpen={isOpen}
      className={cx('nav-item')}
    />)
  :
  (<div className={activeClass}>
    <a href={uri} className={cx('nav-item')}>
      {/* When Icon is figured out: <span className={cx('nav-icon')}>{icon}</span> */}
      {itemText}
    </a>
  </div>);

  return (
    <div key={text} className={cx('nav-item-wrapper')} {...customProps}>
      {currentItem}
    </div>
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
