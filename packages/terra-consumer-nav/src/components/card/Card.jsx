// temp card component for logo

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Card.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Card = ({
  children,
  ...customProps
}) => (
  <div className={cx('card')} {...customProps}>
    {children}
  </div>
);

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
