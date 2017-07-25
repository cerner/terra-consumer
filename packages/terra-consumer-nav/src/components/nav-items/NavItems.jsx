import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import NavToggler from '../nav-toggler/NavToggler';
import './NavItems.scss';

const propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      nav_type: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
      target: PropTypes.string,
      uri: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
      /*
      TODO: Need to figure out what we are doing with icons

      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
      */
      sub_navs: PropTypes.arrayOf(
        PropTypes.shape({
          slug: PropTypes.string,
          nav_type: PropTypes.oneOf(['GROUPING', 'EXTERNAL', 'APPLICATION', 'MODAL']),
          target: PropTypes.string,
          uri: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          isActive: PropTypes.bool.isRequired,
          /*
          TODO: Need to figure out what we are doing with icons

          icon: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element,
          ]),
          */
        }),
      ),
    }),
  ),
  maxNavItems: PropTypes.number,
};

const defaultProps = {
  navItems: [],
  maxNavItems: 9,
};

class NavItems extends Component {
  constructor() {
    super();

    this.state = {
      openToggle: null,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(i, collapse) {
    this.setState({
      openToggle: !collapse ? i : null,
    });
  }

  render() {
    let ret = [];

    const { navItems, maxNavItems, ...customProps } = this.props;

    ret = navItems.map((element, i) => {
      const activeClass = classNames([
        { active: element.isActive },
      ]);

      if (i < maxNavItems) {
        const currentItem = (element.sub_navs && element.sub_navs.length > 0) ?
          (<NavToggler
            text={element.text}
            subItems={element.sub_navs}
            handleToggle={isOpen => this.handleToggle(i, isOpen)}
            isCollapsed={this.state.openToggle !== i}
          />)
        :
        (<div className={activeClass}>
          { element.isActive &&
            <div id="selection" />
          }
          <a href={element.uri} onClick={() => this.setActiveURI(element.uri)} className="text-dark font-medium">
            <span className="nav-icon">{element.icon}</span>
            {element.text}
          </a>
        </div>);
        return (
          <div key={`${element.text}`} className="u-mb--md">
            {currentItem}
          </div>
        );
      }
      return null;
    });

    return (
      <div {...customProps}>
        {ret}
      </div>
    );
  }
}

NavItems.propTypes = propTypes;
NavItems.defaultProps = defaultProps;

export default NavItems;
