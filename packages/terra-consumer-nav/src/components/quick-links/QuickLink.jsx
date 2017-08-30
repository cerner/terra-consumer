import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SmartLink from '../SmartLink/SmartLink';
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
  target: PropTypes.string,
};

const QuickLink = ({
  url,
  icon,
  text,
  target,
  ...customProps
}) => {
  const classIcon = <span className={cx('quicklink-icon')}>{icon}</span>;
  return (
    // <p>Hello</p>
    <SmartLink {...customProps} url={url} target={target} text={text} key={text} icon={classIcon} className={cx('quicklink', customProps.className)} />
    // <Button {...customProps} className={cx('quicklink', customProps.className)} icon={classIcon} href={url} text={text} key={text} />
  );
};

QuickLink.propTypes = propTypes;

export default QuickLink;
