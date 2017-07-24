/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */


const resizeTo = require('./utils').resizeTo;

module.exports = resizeTo(['small', 'tiny', 'medium', 'large', 'huge', 'enormous'], {
  '@tags': ['nav'],
  'Displays a default nav': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/nav-tests/default`)
      .assert.elementPresent('#nav');
  },
});
