import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './QuickLink.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children to be displayed within the quicklink container.
   */
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const QuickLinks = ({
  children,
  ...customProps
}) => (
  <div {...customProps} className={cx('quicklinks-container', customProps.className)}>
    {children}
  </div>
);

QuickLinks.propTypes = propTypes;
QuickLinks.defaultProps = defaultProps;

export default QuickLinks;
