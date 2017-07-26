import React, { Component } from 'react';

import Nav from '../../lib/Nav';

class DefaultNav extends Component {
  constructor() {
    super();

    this.state = {
      isMobileNavOpen: false,
    };

    this.openNav = this.openNav.bind(this);
  }

  openNav() {
    this.setState({
      isMobileNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    const navProps = {
      mainContent: (<button onClick={this.openNav}>open mobile nav</button>),
      isMobileNavOpen: this.state.isMobileNavOpen,
    };

    return (
      <Nav {...navProps} id="nav" />
    );
  }
}

export default DefaultNav;
