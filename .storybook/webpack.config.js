const path = require('path');
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');
const CustomProperties = require('postcss-custom-properties');
const rtl = require('postcss-rtl');

const customProperties = CustomProperties({ preserve: true, warnings: false });
customProperties.setVariables({
  // Body
  '--terra-consumer-body-background-color': '#c7d4ea',
  // Nav
  '--terra-consumer-nav-background-color': 'rgba(255, 255, 255, 0.25)',
  '--terra-consumer-nav-width': '320px',
  '--terra-consumer-nav-link-color': '#3d3d3d',
  '--terra-consumer-nav-text-color': '#3d3d3d',
  '--terra-consumer-mobile-close-button-color': '#3d3d3d',
  // profile
  // TODO profile-link-border-background color is time being as we don't have best way to access background image
  '--terra-consumer-profile-link-border-background': '#c7d4ea',
  '--terra-consumer-profile-link-background': 'rgba(255, 255, 255, 0.25)',
  '--terra-consumer-profile-link-width': '320px',
  '--terra-consumer-profile-link-color': '#3d3d3d',
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                customProperties,
                rtl(),
              ],
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new I18nAggregatorPlugin({
      baseDirectory: path.resolve(__dirname, '../'),
      customTransDir: path.resolve(__dirname, '../packages'),
      supportedLocales: i18nSupportedLocales,
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../aggregated-translations'), 'node_modules'],
  },
};
