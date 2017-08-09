import React from 'react';
import classNames from 'classnames/bind';
import styles from './NavProfile.scss';

const cx = classNames.bind(styles);

const NavProfile = () => (
  <div className={cx('profile')}>
    {/* Placeholder for actual component | TODO: https://jira2.cerner.com/browse/PORTALDEV-35520 */}
    Profile Link goes Here
  </div>
);

export default NavProfile;
