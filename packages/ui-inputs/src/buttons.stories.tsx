import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import { Button } from './button';
import { Plus24Icon, Target24Icon } from '@kaltura-path/ui-icons';
import { withThemeProvider } from '../storybook/with-theme-provider';
import '../../../.storybook/styles.css';

const typeLabel = 'Type';
const typeOptions = {
    'default': 'default',
    'cta': 'cta',
    'borderLess': 'borderless',
};
const typeDefaultValue = 'default';

const layoutLabel = 'Layout';
const layoutOptions = {
    'vertical': 'vertical',
    'horizontal': 'horizontal'
};
const layoutDefaultValue = 'horizontal';

export const Default: Story = () => {
    return <div className="row">
        <div className="col">
            <Button label={text("Label", "Label")}
                    type={select(typeLabel, typeOptions, typeDefaultValue) as 'default' | 'cta' | 'borderless'}
                    layout={select(layoutLabel, layoutOptions, 'horizontal') as 'horizontal' | 'vertical'}
                    isActive={boolean("Active", false)}
                    disabled={boolean("Disabled", false)}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button disabled={boolean("Disabled", false)}
                    icon={<Plus24Icon/>}
                    label={text("Label", "Label")}
                    type={select(typeLabel, typeOptions, typeDefaultValue) as 'default' | 'cta' | 'borderless'}
                    layout={select(layoutLabel, layoutOptions, 'horizontal') as 'horizontal' | 'vertical'}
                    isActive={boolean("Active", false)}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button isProcessing={true}
                    disabled={boolean("Disabled", false)}
                    label={text("Label", "Label")}
                    type={select(typeLabel, typeOptions, typeDefaultValue) as 'default' | 'cta' | 'borderless'}
                    layout={select(layoutLabel, layoutOptions, 'horizontal') as 'horizontal' | 'vertical'}
                    isActive={boolean("Active", false)}
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
            <Button label="CTA" type="cta" onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Borderless" type="borderless" onClick={action('clicked')}></Button>
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
                    type="cta"
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Borderless With Icon"
                    icon={<Target24Icon/>}
                    type='borderless'
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

export const VerticalLayoutButtonWithIcon: Story = () => {
    return <div className="row">
        <div className="col">
            <Button label="Default"
                    icon={<Target24Icon/>}
                    layout='vertical'
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="CTA"
                    icon={<Target24Icon/>}
                    layout='vertical'
                    type="cta"
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Borderless"
                    icon={<Target24Icon/>}
                    layout='vertical'
                    type='borderless'
                    onClick={action('clicked')}></Button>
        </div>
    </div>;
};

VerticalLayoutButtonWithIcon.story = {
    parameters: {
        docs: {
            storyDescription: 'Button component has a layout. The button layout can be set using the <code>layout</code> property. There are two types of layouts: horizontal and vertical.',
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
                    type="cta"
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Label"
                    isProcessing={true}
                    type="borderless"
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

export const ButtonIsActive: Story = () => {
    return <div className="row">
        <div className="col">
            <Button label="Label"
                    isActive={true}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Label"
                    type="cta"
                    isActive={true}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Label"
                    type="borderless"
                    isActive={true}
                    onClick={action('clicked')}></Button>
        </div>
    </div>;
};

ButtonIsActive.story = {
    parameters: {
        docs: {
            storyDescription: 'To functionally set a Button in active state set <code>isActive</code> prop to <code>true</code>.'
        }
    }
};

export const ButtonDisabled: Story = () => {
    return <div className="row">
        <div className="col">
            <Button label="Label"
                    disabled={true}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Label"
                    type="cta"
                    disabled={true}
                    onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button label="Label"
                    type="borderless"
                    disabled={true}
                    onClick={action('clicked')}></Button>
        </div>
    </div>;
};

ButtonDisabled.story = {
    parameters: {
        docs: {
            storyDescription: 'To disable button set <code>disabled</code> prop to <code>true</code>. It will prevent firing of <code>onClick</code> event and change Button style.'
        }
    }
};


export const Workshop: Story = () => {
    return <div className="row">
        <div className="col">
            <Button
                isProcessing={false}
                label={text("Label", "Label")}
                isActive={boolean("Active", false)}
                disabled={boolean("Disabled", false)}
                type={select(typeLabel, typeOptions, typeDefaultValue) as 'default' | 'cta' | 'borderless'}
                layout={select(layoutLabel, layoutOptions, 'horizontal') as 'horizontal' | 'vertical'}
                onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button
                isProcessing={false}
                disabled={boolean("Disabled", false)}
                icon={<Plus24Icon/>}
                label={text("Label", "Label")}
                type={select(typeLabel, typeOptions, typeDefaultValue) as 'default' | 'cta' | 'borderless'}
                layout={select(layoutLabel, layoutOptions, 'horizontal') as 'horizontal' | 'vertical'}
                isActive={boolean("Active", false)}
                onClick={action('clicked')}></Button>
        </div>
        <div className="col">
            <Button
                isProcessing={true}
                disabled={boolean("Disabled", false)}
                label={text("Label", "Label")}
                type={select(typeLabel, typeOptions, typeDefaultValue) as 'default' | 'cta' | 'borderless'}
                layout={select(layoutLabel, layoutOptions, 'horizontal') as 'horizontal' | 'vertical'}
                isActive={boolean("Active", false)}
                onClick={action('clicked')}></Button>
        </div>
    </div>
};

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
