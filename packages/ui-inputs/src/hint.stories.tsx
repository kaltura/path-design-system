import * as React from 'react';
import '../../../.storybook/styles.css';
import { Hint } from './hint';
import { withThemeProvider } from '../storybook/with-theme-provider';

export const DefaultHint: Story = () => {
    return (
        <div style={{ position: 'absolute', right: '0' }}>
            <Hint direction="right" content="Hint content">Test</Hint>
        </div>
    );
};

DefaultHint.story = {
    title: 'Hint'
};

export default {
    title: 'Hint',
    decorators: [withThemeProvider]
};
