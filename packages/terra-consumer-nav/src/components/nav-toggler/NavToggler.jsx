import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import OutlineChevronDown from '../../icons/OutlineChevronDown';
import OutlineChevronUp from '../../icons/OutlineChevronUp';
import './NavToggler.scss';

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
  setActive: PropTypes.func,
};

const defaultProps = {
  setActive: () => {},
  activeURI: null,
  isCollapsed: true,
};

const NavToggler = ({
  text,
  subItems,
  handleToggle,
  isCollapsed,
  setActive,
  ...customProps
}) => {
  const toggleClassTag = isCollapsed ? 'is-collapsed' : 'is-open';
  const tabIndex = isCollapsed ? -1 : 0;

  const togglerClass = classNames([
    'text-dark',
    'font-medium',
    `nav-toggler--${toggleClassTag}`,
  ]);

  const buttonClass = classNames([
    'text-dark',
    'font-medium',
    'toggle-header',
  ]);
  const subNavs = subItems.map((element) => {
    const subItemClass = classNames([
      { active: element.isActive },
      'u-mt--15',
    ]);
    return (
      <div className={subItemClass} key={element.text}>
        { (element.isActive && !isCollapsed) &&
          <div id="selection" />
        }
        <a tabIndex={tabIndex} className="text-dark font-medium" href={element.uri} onClick={() => setActive(element.uri)}>{element.text}</a>
      </div>
    );
  });

  const toggleIcon = isCollapsed ? <OutlineChevronDown /> : <OutlineChevronUp />;
  return (
    <div className={togglerClass} {...customProps}>
      <button className={buttonClass} onClick={() => handleToggle(!isCollapsed)}>
        {text}
        <span className="pull-right">{toggleIcon}</span>
      </button>
      <div className="toggle-content">
        {subNavs}
      </div>
    </div>
  );
};

NavToggler.propTypes = propTypes;
NavToggler.defaultProps = defaultProps;

export default NavToggler;
