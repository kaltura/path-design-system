const { addons } = require('@storybook/addons');
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  stories: ['../packages/**/*.stories.tsx'],
  presets: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
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
    {
      name: '@storybook/addon-docs/preset',
      options: {
        sourceLoaderOptions: null
      }
    }],
  addons: [
    '@storybook/addon-docs/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register'
  ],
};
