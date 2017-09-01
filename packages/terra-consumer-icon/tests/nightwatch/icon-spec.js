/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default icon with aria-hidden equal to true': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('aria-hidden').which.contains('true');
  },

  'Displays a default icon with height equal to 1em': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('height').which.contains('1em');
  },

  'Displays a default icon with width equal to 1em': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('width').which.contains('1em');
  },

  'Displays a default icon with focusable equal to false': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('focusable').which.contains('false');
  },
});
