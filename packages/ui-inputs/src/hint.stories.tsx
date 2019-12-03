import * as React from 'react';
import { theme, ThemeProvider } from './theme';
import './styles.css';
import { Hint } from './hint';
import { useRef } from 'react';

export default {
    title: 'Hint',
};

export const DefaultHint = () => {
    const divRef = useRef(null);
    return (
        <ThemeProvider theme={theme}>
            <div ref={divRef} style={{border: '1px solid red', margin: '50px', padding: '20px', height: '300px'}}>
                <Hint container={divRef} content="Hint content">Test</Hint>
            </div>
        </ThemeProvider>
    );
};

(DefaultHint as any).story = {
    title: 'Hint'
};
