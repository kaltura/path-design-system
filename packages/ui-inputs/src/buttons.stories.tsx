import * as React from 'react';
import {action} from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import {Button} from './button';
import {ThemeProvider, theme} from './theme';
import { IconPlus } from '@path-composer/ui-icons';
import './styles.css';

export default {
    title: 'Action Buttons',
    decorators: [withKnobs]
};

export const DefaultButton = () =>
    <ThemeProvider theme={theme}>
        <div className="row">
            <div className="col">
                <span className="label" style={{'color': 'white'}}>spacer</span>
                <span className="label">Default:</span>
                <span className="label">Disabled:</span>
                <span className="label">Active:</span>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Label</span>
                <Button label={text("Label", "Label")} onClick={action('clicked')}></Button>
                <Button disabled={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
                <Button isActive={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Icon + Label</span>
                <Button label={text("Label", "Label")} icon={IconPlus} onClick={action('clicked')}></Button>
                <Button disabled={true} label={text("Label", "Label")} icon={IconPlus} onClick={action('clicked')}></Button>
                <Button isActive={true} label={text("Label", "Label")} icon={IconPlus} onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Processing</span>
                <Button label={text("Label", "Label")} isProcessing={boolean("Processing", false)} onClick={action('clicked')}></Button>
                <Button disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", false)} onClick={action('clicked')}></Button>
                <Button isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", false)} onClick={action('clicked')}></Button>
            </div>
        </div>
    </ThemeProvider>

DefaultButton.story = {
    title: 'Default Button'
}

export const CTAButton = () =>
    <ThemeProvider theme={theme}>
        <div className="row">
            <div className="col">
                <span className="label" style={{'color': 'white'}}>spacer</span>
                <span className="label">Default:</span>
                <span className="label">Disabled:</span>
                <span className="label">Active:</span>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Label</span>
                <Button isCTA={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
                <Button isCTA={true} disabled={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
                <Button isCTA={true} isActive={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Icon + Label</span>
                <Button isCTA={true} label={text("Label", "Label")} icon={IconPlus} onClick={action('clicked')}></Button>
                <Button isCTA={true} disabled={true} label={text("Label", "Label")} icon={IconPlus} onClick={action('clicked')}></Button>
                <Button isCTA={true} isActive={true} label={text("Label", "Label")} icon={IconPlus} onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Processing</span>
                <Button isCTA={true} label={text("Label", "Label")} isProcessing={boolean("Processing", false)} onClick={action('clicked')}></Button>
                <Button isCTA={true} disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", false)} onClick={action('clicked')}></Button>
                <Button isCTA={true} isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", false)} onClick={action('clicked')}></Button>
            </div>
        </div>
    </ThemeProvider>

CTAButton.story = {
    title: 'CTA Button'
}

export const BorderlessButton = () =>
    <ThemeProvider theme={theme}>
        <div className="row">
            <div className="col">
                <span className="label" style={{'color': 'white'}}>spacer</span>
                <span className="label">Default:</span>
                <span className="label">Disabled:</span>
                <span className="label">Active:</span>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Label</span>
                <Button borderless={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
                <Button borderless={true} disabled={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
                <Button borderless={true} isActive={true} label={text("Label", "Label")} onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Icon + Label</span>
                <Button borderless={true} label={text("Label", "Label")} icon={IconPlus} onClick={action('clicked')}></Button>
                <Button borderless={true} disabled={true} label={text("Label", "Label")} icon={IconPlus} onClick={action('clicked')}></Button>
                <Button borderless={true} isActive={true} label={text("Label", "Label")} icon={IconPlus} onClick={action('clicked')}></Button>
            </div>
            <div className="spacer"></div>
            <div className="col">
                <span className="label">Processing</span>
                <Button borderless={true} label={text("Label", "Label")} isProcessing={boolean("Processing", false)} onClick={action('clicked')}></Button>
                <Button borderless={true} disabled={true} label={text("Label", "Label")} isProcessing={boolean("Processing", false)} onClick={action('clicked')}></Button>
                <Button borderless={true} isActive={true} label={text("Label", "Label")} isProcessing={boolean("Processing", false)} onClick={action('clicked')}></Button>
            </div>
        </div>
    </ThemeProvider>

BorderlessButton.story = {
    title: 'Borderless Button'
}
