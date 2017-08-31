import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Nav from 'terra-consumer-nav';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import styles from './Layout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  nav: PropTypes.object.isRequired,
  helpItems: PropTypes.array,
  children: PropTypes.node.isRequired,
};

class Layout extends React.Component {
  constructor(props) {
    super(props);

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
    const { nav, helpItems, ...customProps } = this.props;
    return (
      <div className={cx('layout', customProps.className)} {...customProps}>
        <div className={cx('nav-container')}>
          <Nav
            {...nav}
            isMobileNavOpen={this.state.isMobileNavOpen}
            onRequestClose={this.toggleNav}
          />
        </div>
        <main className={cx('main-container')}>
          <button className={cx('nav-burger')} onClick={this.toggleNav}><IconMenu /></button>
          {this.props.children}
          <Nav.Help className={cx('help-button-desktop')} helpNavs={helpItems} id="nav-help-button" />
        </main>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
