import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const DangerousHtml = ({
  text,
  ...customProps
}) => (
  <span {...customProps} dangerouslySetInnerHTML={{ __html: text }} />
);

DangerousHtml.propTypes = propTypes;

export default DangerousHtml;
