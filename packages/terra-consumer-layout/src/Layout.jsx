import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Nav from 'terra-consumer-nav';
import { injectIntl, intlShape } from 'react-intl';
import styles from './Layout.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
  * Object of configuration for the side navigation and profile.
  */
  nav: PropTypes.object.isRequired,
  /**
  * Array of links to show for the content of the help button
  */
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
    this.setReference = this.setReference.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // Add event listener for clicks when component mounts
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  // Remove event listener before breakdown of react component
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  // set reference node without document.getElementById or ReactDOM
  setReference(node) {
    this.referenceNode = node;
  }

  handleClickOutside(event) {
    if (this.referenceNode && !this.referenceNode.contains(event.target) && this.state.isMobileNavOpen) {
      this.toggleNav();
    }
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
          <div ref={this.setReference}>
            <Nav
              {...nav}
              isMobileNavOpen={this.state.isMobileNavOpen}
              onRequestClose={this.toggleNav}
            />
          </div>
          <main id="main-container" className={cx('main-container', this.state.isMobileNavOpen && 'nav-open')}>
            <Nav.Burger className={cx('nav-burger')} handleClick={this.toggleNav} />
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
