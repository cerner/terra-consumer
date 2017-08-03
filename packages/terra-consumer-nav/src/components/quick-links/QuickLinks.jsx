import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './QuickLink.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const QuickLinks = ({
  children,
  ...customProps
}) => (
  <div className={cx('quicklinks-container')} {...customProps}>
    {children}
  </div>
);

QuickLinks.propTypes = propTypes;
QuickLinks.defaultProps = defaultProps;

export default QuickLinks;
