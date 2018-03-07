/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const { resizeTo } = require('./utils');

module.exports = resizeTo(['small', 'tiny', 'medium', 'large', 'huge', 'enormous'], {
  '@tags': ['nav'],
  'Displays a portal nav': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/nav-tests/simple-nav`)
      .assert.elementPresent('#terra-consumer-nav');
    // .assert.containsText('body', 'Cannot GET /tests/nav-tests/default');
  },
});
