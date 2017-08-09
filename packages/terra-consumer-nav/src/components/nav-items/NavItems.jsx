import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NavItem from './NavItem';
import styles from './NavItem.scss';

const cx = classNames.bind(styles);

const navItemShape = {
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
};

const propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape(
      navItemShape,
      {
        /**
         * An optional array of objects to be displayed as sub navs toggled by the main nav.
         */
        subNavs: PropTypes.arrayOf(PropTypes.shape(navItemShape)),
      },
    ),
  ),
};

const defaultProps = {
  navItems: [],
};

class NavItems extends Component {
  constructor() {
    super();

    this.state = {
      openToggle: null,
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(toggleId, isOpen) {
    this.setState({
      openToggle: isOpen ? toggleId : null,
    });
  }

  render() {
    const { navItems, ...customProps } = this.props;

    const content = navItems.map((element, i) => {
      let toggleProps = {};
      let subNavs = [];
      if (element.subItems) {
        subNavs = element.subItems.map(item => <NavItem key={item.text} {...item} />);
        toggleProps = {
          isOpen: this.state.openToggle === i,
          handleToggle: this.handleToggle,
          toggleId: i,
        };
      }

      return (
        <NavItem
          key={element.text}
          uri={element.uri}
          text={element.text}
          isActive={element.isActive}
          badgeValue={element.badgeValue}
          {...toggleProps}
        >
          {subNavs}
        </NavItem>
      );
    });

    return (
      <div {...customProps} className={cx('nav-items-contatiner', customProps.className)}>
        {content}
      </div>
    );
  }
}

NavItems.propTypes = propTypes;
NavItems.defaultProps = defaultProps;

export default NavItems;
