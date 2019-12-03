import * as React from 'react';
import { theme, ThemeProvider } from '../src/theme';
import { StoryFn } from '@storybook/addons';

export const withThemeProvider = (storyFn: StoryFn<React.ReactElement>) => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
