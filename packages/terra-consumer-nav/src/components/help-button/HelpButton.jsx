import React from 'react';
import classNames from 'classnames/bind';
import styles from './HelpButton.scss';

const cx = classNames.bind(styles);

const HelpButton = () => (
  <div className={cx('help-button')}>
    {/* Placeholder for actual component: REMOVE THIS | TODO: https://jira2.cerner.com/browse/PORTALDEV-35523 */}
    {/* eslint-disable no-alert */}
    <button onClick={() => alert('help button clicked')}> ? - Help </button>
  </div>
);

export default HelpButton;
