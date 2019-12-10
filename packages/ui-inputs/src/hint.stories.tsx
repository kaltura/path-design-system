import * as React from 'react';
import '../../../.storybook/styles.css';
import { Hint } from './hint';
import { withThemeProvider } from '../storybook/with-theme-provider';
import { Search24Icon } from '@kaltura-path/ui-icons';
import { createUseStyles } from './theme';
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs';

const useStyles = createUseStyles({
    'row': {
        display: 'flex',
    },
    'hint': {
        display: 'inline',
        marginRight: '24px',
    },
    'absoluteHint': {
        position: 'absolute',
    },
});

export const Default: Story = () => {
    return (
        <Hint content="Hint content">Hint Target</Hint>
    );
};

export const HintPlacements: Story = () => {
    const classes = useStyles();
    return (
        <div className={classes.row}>
            <div className={classes.hint}><Hint direction="top" content="Hint content">Top</Hint></div>
            <div className={classes.hint}><Hint direction="bottom" content="Hint content">Bottom</Hint></div>
            <div className={classes.hint}><Hint direction="left" content="Hint content">Left</Hint></div>
            <div className={classes.hint}><Hint direction="right" content="Hint content">Right</Hint></div>
        </div>
    );
};

HintPlacements.story = {
    parameters: {
        docs: {
            storyDescription: `Hint component supports 4 <code>direction</code> positions: top, bottom, left and right. In case Hint is out of visible area it will adjust its position in the opposite of selected direction (top-bottom, left-right) and the arrow pointer will be hidden.`,
        }
    }
};

export const HintContentWidth: Story = () => {
    const classes = useStyles();
    return (
        <div className={classes.row}>
            <div className={classes.hint}>
                <Hint content="Hint content">Short</Hint>
            </div>
            <div className={classes.hint}>
                <Hint content="A long hint content that is provided for this example">Long</Hint>
            </div>
        </div>
    );
};

HintContentWidth.story = {
    parameters: {
        docs: {
            storyDescription: `You can display various length text in Hint, but it is limited to <code>200px</code> width by default`,
        }
    }
};

export const HintContentMaxWidth: Story = () => {
    const classes = useStyles();
    return (
        <div className={classes.row}>
            <div className={classes.hint}>
                <Hint maxWidth={50} content="Max width 50px">Short</Hint>
            </div>
            <div className={classes.hint}>
                <Hint maxWidth={350}
                      content="A long hint content in one line with maxWidth 350px">Long</Hint>
            </div>
        </div>
    );
};

HintContentMaxWidth.story = {
    parameters: {
        docs: {
            storyDescription: `You overwrite default <code>200px</code> width by providing <code>maxWidth</code> prop with specified width in pixels (as number).`,
        }
    }
};

export const HintDisabled: Story = () => {
    const classes = useStyles();
    return (
        <div className={classes.row}>
            <div className={classes.hint}>
                <Hint content="Content of enabled hint">Enabled</Hint>
            </div>
            <div className={classes.hint}>
                <Hint disabled={true} content="You will never see me">Disabled</Hint>
            </div>
        </div>
    );
};

HintDisabled.story = {
    parameters: {
        docs: {
            storyDescription: `To disable Hint set <code>disabled</code> prop to <code>true</code>.`,
        }
    }
};

export const HintCustomTarget: Story = () => {
    const classes = useStyles();
    return (
        <div className={classes.row}>
            <div className={classes.hint}>
                <Hint content="Search"><Search24Icon/></Hint>
            </div>
            
            <div className={classes.hint}>
                <Hint content="Red">
                    <div style={{ width: '50px', height: '24px', backgroundColor: 'red', borderRadius: '4px' }}></div>
                </Hint>
            </div>
            
            <div className={classes.hint}>
                <Hint content="Hint">
                    Text
                </Hint>
            </div>
        </div>
    );
};

HintCustomTarget.story = {
    parameters: {
        docs: {
            storyDescription: `The target of Hint can be any React component or HTML element as well as plain string.`,
        }
    }
};

const label = 'Direction';
const options = {
    'top': 'top',
    'bottom': 'bottom',
    'left': 'left',
    'right': 'right',
};

export const Workshop: Story = () => {
    const classes = useStyles();
    return (
        <div className={classes.row}>
            <div className={classes.absoluteHint} style={{ top: '50%', left: '50%' }}>
                <Hint direction={select(label, options, 'left') as 'top' | 'bottom' | 'left' | 'right'}
                      disabled={boolean('Disabled', false)}
                      maxWidth={number('Max Width', 200)}
                      content={text('Hint content', 'Content')}>
                    {text('Target', 'Target')}
                </Hint>
            </div>
            <div className={classes.absoluteHint} style={{ top: 0, left: 0 }}>
                <Hint direction="bottom" content="Top Left Hint">Top Left</Hint>
            </div>
    
            <div className={classes.absoluteHint} style={{ top: 0, left: '50%' }}>
                <Hint direction="bottom" content="Top Center Hint">Top Center</Hint>
            </div>
    
            <div className={classes.absoluteHint} style={{ top: '50%', left: 0 }}>
                <Hint direction="right" content="Center Left Hint">Center Left</Hint>
            </div>
    
            <div className={classes.absoluteHint} style={{ top: '50%', right: 0 }}>
                <Hint direction="left" content="Center Right Hint">Center Right</Hint>
            </div>
            
            <div className={classes.absoluteHint} style={{ top: 0, right: 0 }}>
                <Hint direction="bottom" content="Top Right Hint">Top Right</Hint>
            </div>
            
            <div className={classes.absoluteHint} style={{ bottom: 0, left: 0 }}>
                <Hint direction="top" content="Bottom Left Hint">Bottom Left</Hint>
            </div>
    
            <div className={classes.absoluteHint} style={{ bottom: 0, left: '50%' }}>
                <Hint direction="top" content="Bottom Center Hint">Bottom Center</Hint>
            </div>
    
            <div className={classes.absoluteHint} style={{ bottom: 0, right: 0 }}>
                <Hint direction="top" content="Bottom Right Hint">Bottom Right</Hint>
            </div>
        </div>
    );
};


Workshop.story = {
    parameters: {
        docs: {
            storyDescription: `An example that includes all the features to be able to test them together. It is here for internal use only and will be removed from the documentation soon.`,
        }
    }
};


export default {
    title: 'Inputs/Hint',
    decorators: [
        withThemeProvider,
        withKnobs,
    ],
    component: Hint,
    parameters: {
        componentSubtitle: `A simple text popup tip.`,
    },
};
