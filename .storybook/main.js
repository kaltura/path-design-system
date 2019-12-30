const { addons } = require('@storybook/addons');
const path = require('path');

module.exports = {
  stories: ['../packages/**/*.stories.tsx'],
  presets: [
    {
      name: '@storybook/preset-typescript',
      options: {
        forkTsCheckerWebpackPluginOptions: {
          colors: false, // disables built-in colors in logger messages
        },
        include: [path.resolve(__dirname, "../packages")]
      },
    },
    '@storybook/preset-ant-design',
    '@storybook/addon-docs/preset'],
  addons: [
    '@storybook/addon-docs/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register'
  ],
};
