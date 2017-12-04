import React from 'react';
import Base from 'terra-base';
import { configure, addDecorator } from '@storybook/react';

/* eslint-disable react/jsx-filename-extension */
addDecorator(story => <Base locale="en-US">{story()}</Base>);

/* eslint-disable global-require */
function loadStories() {
  require('../packages/terra-consumer-nav/stories/Index.jsx');
  require('../packages/terra-consumer-icon/stories/Index.jsx');
  require('../packages/terra-consumer-layout/stories/Index.jsx');
}

configure(loadStories, module);
