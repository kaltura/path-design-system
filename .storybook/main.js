
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
