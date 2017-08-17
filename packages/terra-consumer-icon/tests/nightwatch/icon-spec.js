/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    const size = browser.globals.breakpoints.medium;
    browser.resizeWindow(size[0], size[1], done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-icon', done);
  },

  'Displays a default icon with aria-hidden equal to true': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('aria-hidden').which.contains('true');
  },

  'Displays a default icon with height equal to 1em': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('height').which.contains('48');
  },

  'Displays a default icon with width equal to 1em': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('width').which.contains('48');
  },

  'Displays a default icon with focusable equal to false': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('focusable').which.contains('false');
  },
};
