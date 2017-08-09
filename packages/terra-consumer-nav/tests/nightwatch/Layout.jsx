import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Nav from '../../src/Nav';
import styles from './Layout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  nav: PropTypes.object,
};

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      isMobileNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isMobileNavOpen: !this.state.isMobileNavOpen,
    });
  }

  render() {
    const { nav, ...customProps } = this.props;
    return (
      <div className={cx('layout', customProps.className)} {...customProps}>
        <Nav
          {...nav}
          isMobileNavOpen={this.state.isMobileNavOpen}
          onRequestClose={this.toggleNav}
        />
        <div className={cx('main-container')}>
          <button className={cx('nav-burger')} onClick={this.toggleNav}>
            <IconMenu />
          </button>
          <h2>I am in the main content</h2>
        </div>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
