import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './QuickLink.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The path the quicklink should lead to.
   */
  uri: PropTypes.string.isRequired,
  /**
   * The text displayed on the link.
   */
  text: PropTypes.string.isRequired,
};

const QuickLink = ({
  uri,
  text,
  ...customProps
}) => (
  <Button {...customProps} className={cx('quicklink', customProps.className)} href={uri} text={text} key={text} />
);

QuickLink.propTypes = propTypes;

export default QuickLink;
