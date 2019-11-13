import * as React from 'react';
import {action} from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import {Button} from './button';
import {ThemeProvider} from 'react-jss';
import {theme} from '../../theme/theme';
import './styles.css';

export default {
    title: 'Button',
    decorators: [withKnobs]
};

export const DefaultButton = () =>
    <ThemeProvider theme={theme}>
        <div className="stories">
            <div className="row">
                <span className="label">Default:</span>
                <Button label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Disabled:</span>
                <Button disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Active:</span>
                <Button isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
            </div>
        </div>
    </ThemeProvider>

DefaultButton.story = {
    title: 'Default Button'
}

export const CTAButton = () =>
    <ThemeProvider theme={theme}>
        <div className="stories">
            <div className="row">
                <span className="label">Default:</span>
                <Button isCTA={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Disabled:</span>
                <Button isCTA={true} disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Active:</span>
                <Button isCTA={true} isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button isCTA={true} isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
            </div>
        </div>
    </ThemeProvider>

CTAButton.story = {
    title: 'CTA Button'
}

export const BorderlessButton = () =>
    <ThemeProvider theme={theme}>
        <div className="stories">
            <div className="row">
                <span className="label">Default:</span>
                <Button borderless={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button borderless={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button borderless={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Disabled:</span>
                <Button borderless={true} disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button borderless={true} disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button borderless={true} disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
            </div>
            <div className="row">
                <span className="label">Active:</span>
                <Button borderless={true} isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button borderless={true} isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
                <div className="spacer"></div>
                <Button borderless={true} isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", true)} onClick={action('clicked')}></Button>
            </div>
        </div>
    </ThemeProvider>

BorderlessButton.story = {
    title: 'Borderless Button'
}
