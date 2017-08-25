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
  url: PropTypes.string.isRequired,
  /**
   *
   */
  icon: PropTypes.element,
  /**
   * The text displayed on the link.
   */
  text: PropTypes.string.isRequired,
};

const QuickLink = ({
  url,
  icon,
  text,
  ...customProps
}) => {
  const classIcon = <span className={cx('quicklink-icon')}>{icon}</span>;
  return (
    <Button {...customProps} className={cx('quicklink', customProps.className)} icon={classIcon} href={url} text={text} key={text} />
  );
};

QuickLink.propTypes = propTypes;

export default QuickLink;
