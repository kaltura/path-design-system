const { addons } = require('@storybook/addons');

module.exports = {
  stories: ['../packages/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-docs/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register'
  ],
};
