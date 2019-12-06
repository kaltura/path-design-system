import * as React from 'react';
import { useRef } from 'react';
import '../../../.storybook/styles.css';
import { Hint } from './hint';
import { withThemeProvider } from '../storybook/with-theme-provider';

export default {
    title: 'Hint',
    decorators: [withThemeProvider]
};

export const DefaultHint = () => {
    const divRef = useRef(null);
    return (
        <div ref={divRef} style={{ border: '1px solid red', margin: '50px', padding: '20px', height: '300px' }}>
            <Hint container={divRef} direction="top" content="Hint content">Test</Hint>
        </div>
    );
};

(DefaultHint as any).story = {
    title: 'Hint'
};
