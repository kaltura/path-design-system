// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');
const glob = require('glob');
const tsImportPluginFactory = require('ts-import-plugin');

// Export a function. Accept the base config as the only param.
module.exports = async ({config, mode}) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  // Make whatever fine-grained changes you need
  const babelLoader = config.module.rules[0];

  /**
   * Exclude pacakge's `node_modules` from Storybook babel processing.
   */
  glob.sync('./packages/*/node_modules').forEach(match => {
    babelLoader.exclude.push(path.resolve(match));
  });

  return {
    ...config,
    resolve: {
      ...config.resolve,
      extensions: [
        ...config.resolve.extensions,
        '.ts', '.tsx', '.less', '.css']
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
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
      ]
    }
  }
  Object.assign(config, {

  })
  // Return the altered config
  return config;
};
