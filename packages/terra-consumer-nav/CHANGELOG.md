ChangeLog
# Next Release

# 2.0.0 - (January 29, 2019)
--------
### Changed
- Bump Terra UI packages to latest major version release

# 1.0.1
### Changed
- Added translations for new locale nl-BE.

# 1.0.0
--------
- Upgrade to react 16

# 0.2.14 - (Feb 12, 2018)
### Changed
- Updated the translation texts for help button

------------------

# 0.2.13 - (Jan 30, 2018)
### Added
- Ability to open parent nav when directed to a sub navigation item from dashboard
- Added an aria-label custom prop to NavBurgerButton and Nav close button.

#### changed
- Removed Roboto font import for stylesheet.
------------------

# 0.2.12 - (Jan 5, 2018)
### Changed
- NavLogo now renders a p tag if no url is passed to avoid missing image icon in chrome/safari/ie

------------------

# 0.2.11 - (December 21, 2017)
### Changed
- Updated the hover background for help-button and popup content to make it consistent with profile button and content.
- Updated the margin and padding for toggle content in help popup.
- Move storybook from peerDependencies to devDependencies to avoid warnings in
applications using this package.

------------------

# 0.2.10 - (December 07, 2017)
### Changed
- Updated the help button content with toggle.Toggle content is separated from
- toggle header.

------------------
# 0.2.9 - (November 21, 2017)
### Added
- Added custom callback functions to profile links for click events

------------------

# 0.2.8 - (Nov 10, 2017)
### Changed
- Used auto height popup

------------------

# 0.2.7 - (November 2, 2017)
### Changed
- Fixed border on mobile navigation

------------------

# 0.2.6 - (October 31, 2017)

- Upgrade and fix pop up dependency

------------------

# 0.2.5 - (October 10, 2017)

### Added
- Strings can now be passed as badge values.

### Changed
- Users can now pass a '0' as a badge value.
- Fix the sub item badge alignment
- Early mobile view fix
- Fixed punch through effect
- Align media query with terra-core

------------------

# 0.2.4 - (October 04, 2017)

### Changed
- Fixed it so when in mobile, clicking on the profile and help button links closes the modal and the nav panel
- Fix user profile border top

------------------

# 0.2.3 - (September 29, 2017)

### Changed
- Language switcher fix in rtl mode
- Fix user profile signin display
- Make it so profile pop up flexes height based off number of items in the list
------------------

# 0.2.2 - (September 22, 2017)

### Changed
- Fixed ipad - landscape issue and nav-burger button missing at 992px issue

------------------

# 0.2.1 - (September 21, 2017)

### Changed
- Fixed nav click not working in IE11

------------------

# 0.2.0 - (September 20, 2017)

### Added
- Functionality to conditionally render profile if the object is passed or not.

### Changed
- Fixed issued to render special character like apostrophe in profile name.
- Console error fix in UserProfile

------------------

# 0.1.0 - (September 19, 2017)

### Added
- For react router internal links, strip the domain/host off the url before providing it to the link to prevent linking to something like http://localhost:8080/http:localhost:8080/my-page

### Changed
- Initial Stable Release
- Prevent the Nav scrolling when modal is open.
- Fixed padding issues.
- Fixed modal close button alignment issue.
- Added fallbacks when removing root css variables.
- Fixed profile icon and ellipses alignment.
- Changed profile link image.
- Added theme variable for profile pop up link's hover color.
- Allow the bar above the profile in mobile to be configured independently of the background color


# 0.1.0-BETA.6 - (September 15, 2017)

### Added
- Added a Nav 'Hamburger' Button to be used as the button to open the nav in mobile view.
- Added the ability to have toggle content in profile links.
- Added functionality to close nav when a link from the nav is selected by the user.
- Added functionality to pass a link into the nav logo
- Added a component SafeHtml to render texts with special characters using dangerouslySetInnerHTML

### Changed
- Fix scroll side nav in mobile in Firefox and IE
- Changed logo height to be max of 120 px for both mobile and desktop
- Updated hover effects of nav items and profile links.
- Stop using terra-button for nav close modal, profile button, and help button
- Made Nav and Nav-Container width consistent in all places used.
- Fixed modal content scrolling issue.
- Refactored NavLogo for flex width and added new styles to logo text
- Put move hamburger button font size from layout scss here. Layout burger class just handles position now
- Remove where we are passing classes to terra components
- Padding on nav items changed to be align with profile
- Rendered translated texts using component SafeHtml.
- Signout and signin links are now 'a' tags to utilize the href attribute.
- Fixed logo text issue in Firefox

------------------

# 0.1.0-BETA.5 - (September 06, 2017)

### Added
- Added SmartLink handling external links and react router links
- Added Dex integration example

### Changed
- Updated profile link to match rest of nav-items
- mobile nav now matches styles of desktop nav
- when nav is open on mobile, the main content can no longer scroll freely
- Updated terra-core packages
- Fix nav 100% height in IE

### Removed
- Removed QuickLinks

------------------

# 0.1.0-BETA.4 - (August 30, 2017)

### Added
- Profile now has option to display sign-in link.
- Profile now overlays items on long navigation lists.

### Changed
- Minor UI fixes.
- Font antialiased fixes for chrome/firefox.
- Hover effects for nav-items (mobile/desktop)
- Scrolling content on help popup no longer scrolls title.
- Removed id as prop requirement for help/profile.
- Multiple help togglers do not open simultaneously, although there can be more than one open at a time.
- Updated translation directory name and location.
- Updated traslation message key names following terra-core.

-----------------

# 0.1.0-BETA.3 - (August 25, 2017)

### Added
- Icon support for navigation items.
- target attribute support for navigation items.

### Changed
- Profile settings modal now opens as expected in safari tablet mode.
- Minor UI fixes.
- PropType consistency for links/paths.

-----------------

# 0.1.0-BETA.2 - (August 22, 2017)

### Added
- nav-help: Component that renders a help button in bottom right corner of the screen.
- user-profile: Component that renders user profile portion and allows access to user specific settings.
- Added support for i18n for Navigation components using terra-i18n.
- Added new feature on nav-toggler to open the first toggler found with an 'active' subItem or close all if none is found.
- Added doc site for nav.

### Changed
- Updating Navigation Logo to no longer have a width constraint on mobile/tablet.
- Navigation width is now inherited from parent to allow different widths.
- Nav logo is now flush with top of screen to allow parent to control padding for consistency.
- Prop Type validations are not checked  at nav root level, but rather let other components that use these props validate them

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
