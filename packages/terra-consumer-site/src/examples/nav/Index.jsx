/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-consumer-nav/docs/README.md';
import { version } from 'terra-consumer-nav/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import NavSrc from '!raw-loader!terra-consumer-nav/src/Nav';

// Example Files

const NavExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={NavSrc} />
  </div>
);

export default NavExamples;
