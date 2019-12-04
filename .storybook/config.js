import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
configure([
    require.context('../packages/ui-inputs/src', true, /\.stories\.(tsx|mdx)$/),
    require.context('../packages/ui-icons/src', true, /\.stories\.tsx$/),
], module);
