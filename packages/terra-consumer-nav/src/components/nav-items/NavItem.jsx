import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavItem.scss';
import NavToggler from '../nav-toggler/NavToggler';

const cx = classNames.bind(styles);

const propTypes = {
  // do we need these...
  slug: PropTypes.string,
  navType: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
  target: PropTypes.string,
  //
  uri: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,

  // only those that need toggler
  isSubNav: PropTypes.bool,
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
  subNavs: PropTypes.arrayOf(PropTypes.element),
};

const defaultProps = {
  isActive: false,
  key: 0,
  handleToggle: () => {},
};

const NavItem = ({
  slug,
  navType,
  isSubNav,
  target,
  uri,
  text,
  isActive,
  subNavs,
  toggleId,
  handleToggle,
  isOpen,
  ...customProps
}) => {
  const activeClass = cx([
    { toggler: isSubNav },
    { active: isActive },
  ]);

  const currentItem = (subNavs && subNavs.length > 0) ?
    (<NavToggler
      text={text}
      subItems={subNavs}
      handleToggle={open => handleToggle(toggleId, open)}
      isOpen={isOpen}
    />)
  :
  (<div className={activeClass}>
    { isActive &&
      <div className={cx('selection')} />
    }
    <a href={uri} className={cx(isSubNav ? 'sub-item' : 'nav-item')}>
      {/* When Icon is figured out: <span className={cx('nav-icon')}>{icon}</span> */}
      {text}
    </a>
  </div>);

  return (
    <div key={text} className={cx(!isSubNav ? 'nav-item-wrapper' : '')} {...customProps}>
      {currentItem}
    </div>
  );
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;

export default NavItem;
