import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import styles from './QuickLink.scss';

const cx = classNames.bind(styles);

const propTypes = {
  slug: PropTypes.string, // is this needed?
  nav_type: PropTypes.string, // is this needed?
  uri: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  /*
  TODO: Need to figure out what we are doing with icons

  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  */
};

const QuickLink = ({
  slug,
  nav_type,
  uri,
  text,
  ...customProps
}) => (
  <Button className={cx('quicklink', customProps.className)} href={uri} text={text} {...customProps} />
);

QuickLink.propTypes = propTypes;

export default QuickLink;
