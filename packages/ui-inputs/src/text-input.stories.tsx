import * as React from 'react';
import { useRef, useState } from 'react';
import { TextInput } from './text-input';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withThemeProvider } from '../storybook/with-theme-provider';
import { Minus24Icon, Plus24Icon, Search24Icon } from '@kaltura-path/ui-icons';

export default {
    title: 'Input/Text Input',
    component: TextInput,
    decorators: [
        withKnobs,
        withThemeProvider,
    ],
    parameters: {
        componentSubtitle: `To get a user's input`,
    },
};

export const Default: Story = () => {
    const [, setValue] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        action('changed')(event);
        setValue(event.target.value);
    };
    return (
        <div className='row'>
            <div className='col w400'>
                <TextInput value={text('Value', '')}
                           placeholder={text('Placeholder', 'Input text here')}
                           supportBusy={boolean('Support Busy', false)}
                           postContent={text('Label', 'Input Label')}
                           preContent={boolean('Show Icon', false) ? <Search24Icon/> : undefined}
                           isBusy={boolean('Is Busy', false)}
                           hasError={boolean('Has Error', false)}
                           disabled={boolean('Disabled', false)}
                           onChange={onChange}/>
            </div>
        </div>
    );
};

export const TextInputValue: Story = () => {
    const [value, setValue] = useState('Initial value');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        action('changed')(event);
        setValue(event.target.value);
    };
    
    return (
        <div className='row'>
            <div className='col w400'>
                <TextInput value={value} onChange={onChange}/>
            </div>
        </div>
    );
};

TextInputValue.story = {
    parameters: {
        docs: {
            storyDescription: `Like for default HTML input, you can provide <code>value/onChange</code> pair of properties to be able control user's input.`,
        }
    }
};

export const TextInputPlaceholder: Story = () => {
    return (
        <div className='row'>
            <div className='col w400'>
                <TextInput placeholder="I am a placeholder"/>
            </div>
        </div>
    );
};

TextInputPlaceholder.story = {
    parameters: {
        docs: {
            storyDescription: `The <code>placeholder</code> prop specifies a short hint that describes the expected value of an input field and is displayed in the input field before the user enters a value.`,
        }
    }
};

export const TextInputLabel: Story = () => {
    return (
        <div className='row'>
            <div className='col w400'>
                <TextInput postContent="Nice label"/>
            </div>
        </div>
    );
};

TextInputLabel.story = {
    parameters: {
        docs: {
            storyDescription: `The label is a caption for an input in a user interface. Can be set by <code>postContent</code> property.`,
        }
    }
};

export const TextInputError: Story = () => {
    return (
        <div className='row'>
            <div className='col w400'>
                <TextInput placeholder="Input with error" hasError={true}/>
            </div>
        </div>
    );
};

TextInputError.story = {
    parameters: {
        docs: {
            storyDescription: `In case a user has to be notified that input value is invalid you can set <code>hasError</code> prop to <code>true</code> that will add change TextInput style (add permanent red border) to indicate it has an error.`,
        }
    }
};

export const TextInputDisabled: Story = () => {
    return (
        <div className='row'>
            <div className='col w400'>
                <TextInput placeholder="Disabled input" disabled={true}/>
            </div>
        </div>
    );
};

TextInputDisabled.story = {
    parameters: {
        docs: {
            storyDescription: `To prevent user from being able to input anything in TextInput set <code>disabled</code> prop to <code>true</code>.`,
        }
    }
};

export const TextInputPreAndPostContent: Story = () => {
    return (
        <>
            <div className='row'>
                <div className='col w400'>
                    <TextInput preContent={<Plus24Icon/>} postContent={<Minus24Icon/>}/>
                </div>
            </div>
            
            <div className='row'>
                <div className='col w400'>
                    <TextInput preContent="Pre" postContent="Postfix content"/>
                </div>
            </div>
        </>
    );
};

TextInputPreAndPostContent.story = {
    parameters: {
        docs: {
            storyDescription: `The TextInput can be grouped with prefix and postfix content. <code>preContent</code> prop is designed to fit an icon (React element) that 24px wide, but it can receive a short text too (no more 24px in width otherwise text will be cut). <code>postContent</code> can also receive both React element and string text, but it's not limited in width that makes it good for putting an input label to the right side of input.`,
        }
    }
};

export const TextInputBusyState: Story = () => {
    return (
        <>
            <div className='row'>
                <div className='col w400'>
                    <TextInput supportBusy={true} placeholder="Input supports busy state"/>
                </div>
            </div>
        
            <div className='row'>
                <div className='col w400'>
                    <TextInput supportBusy={true} isBusy={true} placeholder="Input in busy state"/>
                </div>
            </div>
        </>
    );
};

TextInputBusyState.story = {
    parameters: {
        docs: {
            storyDescription: `To show user that TextInput processing something you can set it in busy state. First step is to set <code>supportBusy</code> prop to <code>true</code> to notify TextInput that it can be put in busy state (it will set additional left padding to input of <code>32px</code>). Then you can set <code>isBusy</code> prop to <code>true</code> which trigger TextInput to display spinner icon.`,
        }
    }
};

export const TextInputRef: Story = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className='row'>
            <div className='col w400'>
                <TextInput inputRef={inputRef} defaultValue="Initial input value" />
            </div>
        </div>
    );
};

TextInputRef.story = {
    parameters: {
        docs: {
            storyDescription: `TextInput supports React Refs (check out <a href="https://reactjs.org/docs/refs-and-the-dom.html" target="_blank">official docs</a> for more information). Provide function or reference object (<code>(ref: InputElement) => void | React.MutableRefObject</code>) to <code>inputRef</code> prop to connect it with TextInput.`,
        }
    }
};
