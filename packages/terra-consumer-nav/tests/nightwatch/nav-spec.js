/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  '@tags': ['nav'],
  'Displays a portal nav': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/nav-tests/portal`)
      .expect.element('#layout').to.be.present;
      // .assert.containsText('body', 'Cannot GET /tests/nav-tests/default');
  },
});
