/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-consumer-layout/docs/README.md';
import { version } from 'terra-consumer-layout/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import LayoutSrc from '!raw-loader!terra-consumer-layout/src/Layout';

// Example Files

const LayoutExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={LayoutSrc} />
  </div>
);

export default LayoutExamples;
