import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import DexLayout from './DexLayout';
import PortalLayout from './PortalLayout';

storiesOf('Layout', module)
  .add('Dex', () => (
    <DexLayout />
  ))
  .add('Portal', () => (
    <PortalLayout />
  ));
