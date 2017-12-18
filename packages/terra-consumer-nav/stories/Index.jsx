import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NavBurger from '../src/components/nav-burger-button/NavBurgerButton';
import HelpButton from './HelpButton';
import SimpleNav from './SimpleNav';
import SafeHtml from './SafeHtml';
import NavLogo from './NavLogo';

storiesOf('Nav', module)
  .add('Burger Menu', () => (
    <NavBurger handleClick={action('clicked')} />
  ))
  .add('Help Button', () => (
    <HelpButton />
  ))
  .add('SafeHtml', () => (
    <SafeHtml />
  ))
  .add('Nav Logo', () => (
    <NavLogo />
  ))
  .add('Simple Nav', () => (
    <SimpleNav />
  ));
