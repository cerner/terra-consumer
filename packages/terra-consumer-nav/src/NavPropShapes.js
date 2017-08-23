import PropTypes from 'prop-types';

const navItemShape = {
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
  icon: PropTypes.element,
  /**
   * Whether or not the link should be styled as active or not.
   */
  isActive: PropTypes.bool,
  /**
   * An optional badge. When supplied, displays the value inline, styled alongside the text.
   */
  badgeValue: PropTypes.number,
};

export default navItemShape;
