import React from 'react';
import Nav from '../../src/Nav';
import I18nShell from './I18nShell';

/* eslint-disable no-alert */
const alertFunction = () => { alert('You clicked the burger'); };

const styles = {
  paddingLeft: '15px',
  paddingTop: '5px',
};

const styles2 = Object.assign({}, styles, { fontSize: '24px' });
const styles3 = Object.assign({}, styles2, { color: '#f00' });

export default () => (
  <I18nShell>
    <p>Default sized burger</p>
    <Nav.Burger handleClick={alertFunction} style={styles} />
    <p>Custom sized burger</p>
    <Nav.Burger handleClick={alertFunction} style={styles2} />
    <p>Custom styled burger</p>
    <Nav.Burger handleClick={alertFunction} style={styles3} />
  </I18nShell>
);
