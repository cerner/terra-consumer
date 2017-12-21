import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
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
