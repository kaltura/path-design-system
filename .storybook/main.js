const { addons } = require('@storybook/addons');
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
  stories: ['../packages/**/*.stories.(tsx|mdx)'],
  presets: [

    {
      name: '@storybook/addon-docs/preset',
      options: {
      }
    }],
  addons: [
    '@storybook/addon-docs/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register'
  ],
};


/*
{
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, 'tsconfig.json'),
          ignoreDiagnostics: [7005],
          getCustomTransformers: () => ({
            before: [ tsImportPluginFactory(
              {
                libraryName: 'antd',
                style: 'css',
                libraryDirectory: 'es'
              }
            ) ]
          }),
        },
        tsDocgenLoaderOptions: {
          tsconfigPath: path.resolve(__dirname, 'tsconfig.json'),
        },
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, "../packages")]
      },
    },
 */

