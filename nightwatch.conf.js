/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "chromedriver" }]*/

const fs = require('fs');
const globSync = require('glob').sync;
const packages = require('./lerna.json').packages;
const chromefinder = require('chrome-launcher/chrome-finder');

const chromedriver = require('chromedriver');


const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./packages/terra-consumer-site/webpack.prod.config');
const seleniumServerStandaloneJar = require('selenium-server-standalone-jar');


const port = 8080;
const webpackServer = new WebpackDevServer(webpack(webpackConfig), { quiet: true, hot: false, inline: false });


const startWebpackDevServer = (done) => {
  webpackServer.listen(port, '0.0.0.0', (err) => {
    if (err) {
      throw new Error(err);
    }
    done();
  });
};

const stopWebpackDevServer = (done) => {
  webpackServer.close(() => done());
};


module.exports = ((settings) => {
  const config = Object.assign({}, settings);

  // Setup local selenium
  config.selenium.server_path = seleniumServerStandaloneJar.path;
  config.selenium.start_process = true;

  // Discover all the nightwatch tests in the project
  config.src_folders = packages
    .map(pkgs => globSync(pkgs))
    .reduce((all, pkg) => all.concat(pkg), [])
    .filter(packagePath => fs.existsSync(`${packagePath}/tests/nightwatch`));


  config.test_settings = {
    default: {
      launch_url: `http://localhost:${port}`,
      persist_globals: true,
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        breakpoints: {
          tiny: [470, 768],
          small: [622, 768],
          medium: [838, 768],
          large: [1000, 768],
          huge: [1300, 768],
          enormous: [1500, 768],
        },
        before: startWebpackDevServer,
        after: stopWebpackDevServer,
      },
      filter: 'tests/nightwatch/*-spec.js',
      screenshots: {
        enabled: true,
        path: './screenshots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            '--headless',
            '--disable-gpu ',
            '--no-sandbox ',
          ],
          binary: chromefinder[process.platform]()[0],
        },
      },
    },
  };

  return config;
})(require('./nightwatch.json'));
