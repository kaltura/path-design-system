// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: {
    extensions: [ '.ts', '.tsx', '.less', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
        loader: require.resolve('awesome-typescript-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [ tsImportPluginFactory({libraryName: "antd", style: true}) ]
              }),
            },
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: { javascriptEnabled : true }
          }
        ],
      }
    ],
  },
};
