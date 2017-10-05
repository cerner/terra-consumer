import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavItem.scss';
import navItemShape from '../../NavPropShapes';
import NavToggler from '../nav-toggler/NavToggler';
import SafeHtml from '../safe-html/SafeHtml';
import SmartLink from '../smart-link/SmartLink';

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
   * Function to be applied to the generated link.
   */
  handleClick: PropTypes.func,
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
  isExternal,
  handleClick,
  children,
  ...customProps
}) => {
  const activeClass = cx('active');
  const badgeString = `${badgeValue}`;

  const itemLabel = (
    <div>
      <SafeHtml text={text} />
      { (!!badgeValue && badgeString.trim()) &&
        <SafeHtml className={cx('badge')} text={badgeString} />
      }
    </div>
  );

  const itemText = (
    <div className={cx('item')}>
      { icon && <div className={cx('icon')}>{icon}</div> }
      <div className={cx('label')}>{itemLabel}</div>
    </div>
  );

  return (children && children.length > 0) ?
    (<NavToggler
      {...customProps}
      header={itemText}
      handleToggle={open => handleToggle(toggleId, open)}
      isOpen={isOpen}
      className={cx('nested', customProps.className)}
    >
      {children}
    </NavToggler>)
    :
    (<div className={isActive ? activeClass : ''}>
      <SmartLink
        {...customProps}
        url={url}
        target={target}
        isExternal={isExternal}
        activeClass={activeClass}
        handleClick={handleClick}
        className={cx('link', customProps.className)}
      >
        {itemText}
      </SmartLink>
    </div>);
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
