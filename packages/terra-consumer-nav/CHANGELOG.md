ChangeLog
=========

# 0.2.0-BETA.1 - (August 17, 2017)
-----------------
Initial beta release

### Added
- Base Navigation component that wraps up all sub-components into one clean reusable package.
- Sub-components of main Navigation:
  *  nav-logo: Component to render an image nicely within the nav.
  *  nav-items: Component that generates the main navigation utilizing sub-component nav-item.
  *  nav-item: Component used to style all nav-items and determines whether it should use a toggler.
  *  nav-toggler: A wrapper component of terra-toggler which styles the element.
  *  quick-links: Component that generates the quick link portion of the nav utilizing sub-component quick-link.
  *  quick-link: Component used to style all quick links.
  *  nav-help: Component that renders a help button in bottom right corner of the screen. 
  *  user-profile: Component that renders user profile portion of navigation and allows to access user specific settings. 
- Test cases for Nav and sub components.

### Changed
- package.json -> now includes required terra packages used by the nav
