import PropTypes from 'prop-types';

export const navItemShape = {
  /**
   * Text to be displayed in profile link.
   */
  text: PropTypes.string.isRequired,
  /**
   * The path the link would redirect to.
   */
  url: PropTypes.string,
  /**
   * Optional Icon to be displayed in profile link.
   */
  icon: PropTypes.element,
  /**
   *  Specifies where to open the linked document.
   */
  target: PropTypes.string,
  /**
   * Whether or not the link should be styled as active or not.
   */
  isActive: PropTypes.bool,
  /**
   * An optional badge. When supplied, displays the value inline, styled alongside the text.
   */
  badgeValue: PropTypes.number,
};

export const navItemShapeDefaults = {
  url: '',
  icon: null,
  target: '_self',
  isActive: false,
  badgeValue: 0,
};
