const path = require('path');
const glob = require('glob');
const tsImportPluginFactory = require('ts-import-plugin');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

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
          test: /\.(stories|story)\.mdx$/,
          use: [
            {
              loader: 'babel-loader',
              // may or may not need this line depending on your app's setup
              options: {
                plugins: ['@babel/plugin-transform-react-jsx'],
              },
            },
            {
              loader: '@mdx-js/loader',
              options: {
                compilers: [createCompiler({})],
              },
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
};
