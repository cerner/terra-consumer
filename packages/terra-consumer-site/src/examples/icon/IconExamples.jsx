import React from 'react';
// import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-consumer-icon/docs/README.md';
import { version } from 'terra-consumer-icon/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
// import IconSrc from '!raw-loader!../../../node_modules/terra-icon/lib/IconBase';
// <PropsTable id="props" src={IconSrc} /> (move this inside function)

// Example Files
import IconStatic from './IconStatic';
import IconThemeable from './IconThemeable';
import IconCustom from './IconCustom';

const IconExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="static_icons">Static Icons</h2>
    <IconStatic />
    <br />
    <h2 id="themeable_icons">Themeable Icons</h2>
    <IconThemeable />
    <br />
    <h2 id="custom_icons">Custom Icons</h2>
    <IconCustom />
  </div>
);

export default IconExamples;
