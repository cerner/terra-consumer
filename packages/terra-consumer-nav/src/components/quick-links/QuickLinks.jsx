import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import styles from './QuickLinks.scss';

const cx = classNames.bind(styles);

const propTypes = {
  quickLinks: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      nav_type: PropTypes.string,
      uri: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      /*
      TODO: Need to figure out what we are doing with icons

      icon: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
      ]),
      */
    }),
  ),
  maxListSize: PropTypes.number,
};

const defaultProps = {
  quickLinks: [],
  maxListSize: 4,
  // TODO: remove, config should prevent more from coming in props
};

const QuickLinks = ({
  quickLinks,
  maxListSize,
  ...customProps
}) => {
  let ret = [];
  let linkCount = 0;

  ret = quickLinks.map((element) => {
    if (linkCount < maxListSize && (element.text && element.uri)) {
      linkCount += 1;
      return (<Button className={cx('quicklink', customProps.className)} href={element.uri} text={element.text} key={element.text} />);
    }
    return null;
  });

  return (
    <div style={{ padding: '0 20px' }}>
      {ret}
    </div>
  );
};

QuickLinks.propTypes = propTypes;
QuickLinks.defaultProps = defaultProps;

export default QuickLinks;
