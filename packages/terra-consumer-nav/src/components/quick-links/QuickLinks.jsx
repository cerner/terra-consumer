import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './QuickLink.scss';

const cx = classNames.bind(styles);

const propTypes = {
  quickLinks: PropTypes.arrayOf(PropTypes.element),
};

const defaultProps = {
  quickLinks: [],
};

const QuickLinks = ({
  quickLinks,
  ...customProps
}) => (
  <div className={cx('quicklinks-container')} {...customProps}>
    {quickLinks}
  </div>
);

QuickLinks.propTypes = propTypes;
QuickLinks.defaultProps = defaultProps;

export default QuickLinks;
