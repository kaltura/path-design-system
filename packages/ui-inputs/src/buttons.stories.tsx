import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Button } from './button';
import { Plus24Icon, Target24Icon } from '@kaltura-path/ui-icons';
import { withThemeProvider } from '../storybook/with-theme-provider';
import '../../../.storybook/styles.css';

export default {
    title: 'Inputs/Button',
    component: Button,
    decorators: [
        withKnobs,
        withThemeProvider,
    ],
    parameters: {
        componentSubtitle: 'To trigger an operation.',
    },
};

const label = 'Type';
const options = {
    'default': 'default',
    'cta': 'cta',
    'borderLess': 'borderless',
};
const defaultValue = 'default';

export const Default: Story = () => {
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

ButtonTypes.story = {
    parameters: {
        docs: {
            storyDescription: `There're 3 types of buttons: default, CTA and borderless. They all have the same behavior, the only difference is how they look on the screen. To change Button type to CTA you need to set <code>isCTA</code> prop to true, to change Button type to Borderless you need to set <code>borderless</code> prop to <code>true</code>. To set the default Button style set <code>isCTA</code> and <code>borderless</code> props to false.`
        }
    }
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

ButtonWithIcon.story = {
    parameters: {
        docs: {
            storyDescription: 'Button component can contain an Icon. This is done by setting the <code>icon</code> property. The icon has to be a React element type.',
        }
    }
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

ButtonProcessing.story = {
    parameters: {
        docs: {
            storyDescription: 'A loading indicator can be added to a button by setting the <code>isProcessing</code> property on the Button. Button will preserve the width after switching to the busy state.'
        }
    }
};
