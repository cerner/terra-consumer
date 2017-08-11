import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import Nav from '../../src/Nav';
import NavHelp from '../../src/components/nav-help/NavHelp';
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
          {/* Added a div to test the HelpButton relative to page content */}
          <div style={{ background: '#fff', height: '100%', width: 'inherit' }}>I am in the main content</div>
          <div className={cx('footer')}>
            <NavHelp help={nav.helpItems} id={nav.helpId} />
          </div>
          <NavHelp className={cx('help-button-desktop')} help={nav.helpItems} id={nav.helpId} />
        </div>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
