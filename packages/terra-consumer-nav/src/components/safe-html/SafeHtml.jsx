import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const SafeHtml = ({
  text,
  ...customProps
}) => (
  // eslint-disable-next-line react/no-danger
  <span {...customProps} dangerouslySetInnerHTML={{ __html: text }} />
);

SafeHtml.propTypes = propTypes;

export default SafeHtml;
