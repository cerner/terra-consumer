import React from 'react';
import { storiesOf } from '@storybook/react';
import IconStatic from './IconStatic';
import IconThemeable from './IconThemeable';

storiesOf('Icon', module)
  .add('Static', () => (
    <IconStatic />
  ))
  .add('Themeable', () => (
    <IconThemeable />
  ));
