/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */


const resizeTo = require('./utils').resizeTo;

module.exports = resizeTo(['small', 'tiny', 'medium', 'large', 'huge', 'enormous'], {
  '@tags': ['nav'],
  'Displays a portal nav': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/nav-tests/portal`)
      .assert.elementPresent('#layout');
      // .assert.containsText('body', 'Cannot GET /tests/nav-tests/default');
  },
});
