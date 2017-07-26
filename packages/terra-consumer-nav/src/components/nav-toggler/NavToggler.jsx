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
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      uri: PropTypes.string,
      isActive: PropTypes.bool.isRequired,
    }),
  ),
  handleToggle: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool,
};

const defaultProps = {
  isCollapsed: true,
};

const NavToggler = ({
  text,
  subItems,
  handleToggle,
  isCollapsed,
  ...customProps
}) => {
  const tabIndex = isCollapsed ? -1 : 0;

  const subNavs = subItems.map((element) => {
    const subItemClass = cx([
      { active: element.isActive },
      'toggle-margin-top',
    ]);

    return (
      <div className={subItemClass} key={element.text}>
        { (element.isActive && !isCollapsed) &&
          <div id="selection" />
        }
        <a tabIndex={tabIndex} className={cx('sub-item')} href={element.uri}>{element.text}</a>
      </div>
    );
  });

  const toggleIcon = isCollapsed ? <OutlineChevronDown /> : <OutlineChevronUp />;

  return (
    <div className={cx(customProps.className)}>
      <button className={cx('toggle-header')} onClick={() => handleToggle(!isCollapsed)}>
        <Arrange
          align="stretch"
          fill={text}
          fitEnd={toggleIcon}
        />
      </button>
      <Toggler isOpen={!isCollapsed} isAnimated style={{ padding: 0 }}>
        {subNavs}
      </Toggler>
    </div>
  );
};

NavToggler.propTypes = propTypes;
NavToggler.defaultProps = defaultProps;

export default NavToggler;
