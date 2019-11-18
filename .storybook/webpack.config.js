const path = require('path');
const glob = require('glob');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = async ({config, mode}) => {

  const babelLoader = config.module.rules[0];

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
