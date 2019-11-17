import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-knobs/register';

import addons from '@storybook/addons';

setTimeout(() => {
    addons.elements.panel['storybookjs/knobs/panel'].title = 'Properties';
});
