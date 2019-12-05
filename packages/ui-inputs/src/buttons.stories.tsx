import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Button } from './button';
import { Plus24Icon, Target24Icon } from '@kaltura-path/ui-icons';
import { withThemeProvider } from '../storybook/with-theme-provider';
import '../../../.storybook/styles.css';

export default {
    title: 'Action Buttons',
    component: Button,
    decorators: [
        withKnobs,
        withThemeProvider,
    ],
    parameters: {
        componentSubtitle: 'Handy status label',
    },
};

const label = 'Type';
const options = {
    'default': 'default',
    'cta': 'cta',
    'borderLess': 'borderless',
};
const defaultValue = 'default';

export const ActionButton: Story = () => {
    return <div className="row">
        <div className="col">
            <Button label={text("Label", "Label")}
                    isCTA={select(label, options, defaultValue) === options.cta}
                    isActive={boolean("Active", false)}
                    disabled={boolean("Disabled", false)}
                    borderless={select(label, options, defaultValue) === options.borderLess}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button disabled={boolean("Disabled", false)}
                    icon={<Plus24Icon/>}
                    label={text("Label", "Label")}
                    isCTA={select(label, options, defaultValue) === options.cta}
                    borderless={select(label, options, defaultValue) === options.borderLess}
                    isActive={boolean("Active", false)}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button isProcessing={true}
                    disabled={boolean("Disabled", false)}
                    label={text("Label", "Label")}
                    isCTA={select(label, options, defaultValue) === options.cta}
                    isActive={boolean("Active", false)}
                    borderless={select(label, options, defaultValue) === options.borderLess}
                    onClick={action('clicked')}></Button>
        </div>
    
    </div>
};

export const ButtonTypes: Story = () => {
    return <div className="row">
        <div className="col">
            <Button label="Default" onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="CTA" isCTA={true} onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Borderless" borderless={true} onClick={action('clicked')}></Button>
        </div>
    </div>;
};

export const ButtonWithIcon: Story = () => {
    return <div className="row">
        <div className="col">
            <Button label="Default With Icon"
                    icon={<Target24Icon/>}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="CTA With Icon"
                    icon={<Target24Icon/>}
                    isCTA={true}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Borderless With Icon"
                    icon={<Target24Icon/>}
                    borderless={true}
                    onClick={action('clicked')}></Button>
        </div>
    </div>;
};

export const ButtonProcessing: Story = () => {
    return <div className="row">
        <div className="col">
            <Button label="Label"
                    isProcessing={true}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Label"
                    isProcessing={true}
                    isCTA={true}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Label"
                    isProcessing={true}
                    borderless={true}
                    onClick={action('clicked')}></Button>
        </div>
    </div>;
};
