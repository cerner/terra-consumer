ChangeLog
=========
# 0.2.0 - (<!-- Insert date using the format August 14, 2017 -->)

### Added
- Added new feature on nav-toggler to open the first toggler found with an 'active' subItem or close all if none is found.
- Added doc site for nav.

### Changed
- Updating Navigation Logo to no longer have a width constraint on mobile/tablet.

-----------------

# 0.1.0-BETA.1 - (August 14, 2017)

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
  *  help-button: Component that renders a help button. This is a placeholder and work in progress.
  *  nav-profile: Component that renders the profile portion of the nav. This is a placeholder and work in progress.
- Test cases for Nav and sub components.

### Changed
- package.json -> now includes required terra packages used by the nav

# 0.2.0-BETA.1 - (August 22, 2017)
-----------------
Initial beta release

### Added
  *  nav-help: Component that renders a help button in bottom right corner of the screen. 
  *  user-profile: Component that renders user profile portiand allows to access user specific settings.
  *  Added support for i18n for Navigation components using terra-i18n.