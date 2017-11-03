import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Nav from 'terra-consumer-nav';
import HelpButton from './HelpButton';
import SimpleNav from './SimpleNav';
import TextLogo from './TextLogo';
import SafeHtml from './SafeHtml';
import NavLogo from './NavLogo';

storiesOf('Nav', module)
  .add('Burger Menu', () => (
    <Nav.Burger handleClick={action('clicked')} />
  ))
  .add('Help Button', () => (
    <HelpButton />
  ))
  .add('Text Logo', () => (
    <TextLogo />
  ))
  .add('SafeHtml', () => (
    <SafeHtml />
  ))
  .add('NavLogo', () => (
    <NavLogo />
  ))
  .add('Simple Nav', () => (
    <SimpleNav />
  ));
