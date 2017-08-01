import React from 'react';
import classNames from 'classnames/bind';
import styles from './HelpButton.scss';

const cx = classNames.bind(styles);

const HelpButton = () => (
  <div className={cx('help-button')}>
    {/* Placeholder for actual component */}
    <button onClick={() => alert('help button clicked')}> ? - Help </button>
  </div>
);

export default HelpButton;
