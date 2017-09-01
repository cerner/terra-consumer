import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Nav from 'terra-consumer-nav';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import { injectIntl, intlShape } from 'react-intl';
import styles from './Layout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  nav: PropTypes.object.isRequired,
  helpItems: PropTypes.array,
  /**
   * Injected react-intl formatting api
   */
  intl: intlShape.isRequired,
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
    const { nav, helpItems, intl, ...customProps } = this.props;
    return (
      <div>
        <div className={cx('skip-container')}>
          <a className={cx('skip-to-main-content')} href="#main-container" id="skip-maincontent-link">
            {intl.formatMessage({ id: 'Terra.Consumer.Layout.skipcontent' })}
          </a>
        </div>
        <div className={cx('layout', customProps.className)} {...customProps}>
          <div className={cx('nav-container')}>
            <Nav
              {...nav}
              isMobileNavOpen={this.state.isMobileNavOpen}
              onRequestClose={this.toggleNav}
            />
          </div>
          <main id="main-container" className={cx('main-container')}>
            <button className={cx('nav-burger')} onClick={this.toggleNav}><IconMenu /></button>
            {this.props.children}
            <Nav.Help className={cx('help-button')} helpNavs={helpItems} id="nav-help-button" />
          </main>
        </div>
      </div>
    );
  }
}

Layout.propTypes = propTypes;

export default injectIntl(Layout);
