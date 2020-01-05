import * as React from 'react';
import { StoryFn } from '@storybook/addons';

export const withThemeProvider = (storyFn: StoryFn<React.ReactElement>) => (
    storyFn()
);
