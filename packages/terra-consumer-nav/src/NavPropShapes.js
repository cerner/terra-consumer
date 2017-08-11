import PropTypes from 'prop-types';

const navElementShape = {
  /**
   * Text to be displayed in profile link.
   */
  text: PropTypes.string.isRequired,
  /**
   * The path the profile link would redirect to.
   */
  uri: PropTypes.string.isRequired,
  /**
   * Optional Icon to be displayed in profile link.
   */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default navElementShape;
