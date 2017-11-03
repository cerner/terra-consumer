import React from 'react';
import Base from 'terra-base';
import { configure, addDecorator } from '@storybook/react';

/* eslint-disable react/jsx-filename-extension */
addDecorator(story => <Base locale="en-US">{story()}</Base>);

/* eslint-disable global-require */
function loadStories() {
  require('./stories/terra-consumer-nav/Index.jsx');
  require('./stories/terra-consumer-layout/Index.jsx');
  require('./stories/terra-consumer-icon/Index.jsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);
