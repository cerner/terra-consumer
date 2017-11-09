import React from 'react';
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
