import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import NavItem from './NavItem';
import styles from './NavItem.scss';

const cx = classNames.bind(styles);

const propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.object),
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

  handleToggle(i, isOpen) {
    this.setState({
      openToggle: isOpen ? i : null,
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
        <NavItem key={element.text} {...element} {...toggleProps}>
          {subNavs}
        </NavItem>
      );
    });

    return (
      <div className={cx('nav-items-contatiner')} {...customProps}>
        {content}
      </div>
    );
  }
}

NavItems.propTypes = propTypes;
NavItems.defaultProps = defaultProps;

export default NavItems;
