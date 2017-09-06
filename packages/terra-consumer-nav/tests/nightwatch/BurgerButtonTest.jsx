import React from 'react';
import Nav from '../../src/Nav';
import I18nShell from './I18nShell';

/* eslint-disable no-alert */
const alertFunction = () => { alert('You clicked the burger'); };

export default () => (
  <I18nShell>
    <Nav.Burger handleClick={alertFunction} style={{ left: '15px', top: '10px' }} />
    <p style={{ paddingTop: '40px', paddingLeft: '15px' }}>Make sure to make your screen size tablet/mobile so you can see me!</p>
  </I18nShell>
);
