const path = require('path');
const I18nAggregatorPlugin = require('terra-i18n-plugin');
const i18nSupportedLocales = require('terra-i18n/lib/i18nSupportedLocales');
const CustomProperties = require('postcss-custom-properties');
const rtl = require('postcss-rtl');

const customProperties = CustomProperties({ preserve: true, warnings: false });

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
      translationsDirectoryRouters: ['packages'],
      supportedLocales: i18nSupportedLocales,
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, '../aggregated-translations'), 'node_modules'],
  },
};
