import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './QuickLinks.scss';

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
};

const QuickLinks = ({
  quickLinks,
  maxListSize,
  ...customProps
}) => {
  const linkClassName = classNames([
    'text-dark',
    'font-medium',
    'quicklink',
    'u-mb--sm',
    customProps.className,
  ]);
  let ret = [];
  let linkCount = 0;

  ret = quickLinks.map((element) => {
    if (linkCount < maxListSize && (element.text && element.uri)) {
      linkCount += 1;
      return (<a className={linkClassName} href={element.uri} key={element.text}>{element.text}</a>);
    }
    return null;
  });

  return (
    <div>
      {ret}
    </div>
  );
};

QuickLinks.propTypes = propTypes;
QuickLinks.defaultProps = defaultProps;

export default QuickLinks;
