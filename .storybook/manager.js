import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  brandTitle: 'Path Design System',
});

addons.setConfig({
  showRoots: true,
  panelPosition: 'bottom',
  theme,
});
