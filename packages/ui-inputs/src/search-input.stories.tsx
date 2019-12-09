import * as React from 'react';
import { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { SearchInput } from './search-input';
import { withThemeProvider } from '../storybook/with-theme-provider';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'Inputs/Search Input',
    component: SearchInput,
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
    return <div className="row">
        <div className="col w400">
            <SearchInput value={text('Value', '')}
                         placeholder={text('Placeholder', '')}
                         hasError={boolean('Has Error', false)}
                         isBusy={boolean('Is busy', false)}
                         disabled={boolean('Disabled', false)}
                         onChange={onChange}/>
        </div>
    </div>;
};

export const SearchInputValue: Story = () => {
    const [value, setValue] = useState('Initial value');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        action('changed')(event);
        setValue(event.target.value);
    };
    
    return (
        <div className='row'>
            <div className='col w400'>
                <SearchInput value={value} onChange={onChange}/>
            </div>
        </div>
    );
};

SearchInputValue.story = {
    parameters: {
        docs: {
            storyDescription: `Like for default HTML input, you can provide <code>value/onChange</code> pair of properties to be able control user's input.`,
        }
    }
};

export const SearchInputPlaceholder: Story = () => {
    return (
        <div className='row'>
            <div className='col w400'>
                <SearchInput placeholder="I am a placeholder"/>
            </div>
        </div>
    );
};

SearchInputPlaceholder.story = {
    parameters: {
        docs: {
            storyDescription: `The <code>placeholder</code> prop specifies a short hint that describes the expected value of an input field and is displayed in the input field before the user enters a value.`,
        }
    }
};

export const SearchInputError: Story = () => {
    return (
        <div className='row'>
            <div className='col w400'>
                <SearchInput placeholder="Input with error" hasError={true}/>
            </div>
        </div>
    );
};

SearchInputError.story = {
    parameters: {
        docs: {
            storyDescription: `In case a user has to be notified that input value is invalid you can set <code>hasError</code> prop to <code>true</code> that will add change SearchInput style (add permanent red border) to indicate it has an error.`,
        }
    }
};

export const SearchInputDisabled: Story = () => {
    return (
        <div className='row'>
            <div className='col w400'>
                <SearchInput placeholder="Disabled input" disabled={true}/>
            </div>
        </div>
    );
};

SearchInputDisabled.story = {
    parameters: {
        docs: {
            storyDescription: `To prevent user from being able to input anything in SearchInput set <code>disabled</code> prop to <code>true</code>.`,
        }
    }
};

export const SearchInputBusyState: Story = () => {
    return (
        <div className='row'>
            <div className='col w400'>
                <SearchInput isBusy={true} placeholder="Input in busy state"/>
            </div>
        </div>
    );
};

SearchInputBusyState.story = {
    parameters: {
        docs: {
            storyDescription: `To show user that SearchInput processing something you can set it in busy state. Change <code>isBusy</code> prop to <code>true</code> which trigger SearchInput to display spinner icon.`,
        }
    }
};

export const SearchInputRef: Story = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className='row'>
            <div className='col w400'>
                <SearchInput inputRef={inputRef} defaultValue="Initial input value" />
            </div>
        </div>
    );
};

SearchInputRef.story = {
    parameters: {
        docs: {
            storyDescription: `SearchInput supports React Refs (check out <a href="https://reactjs.org/docs/refs-and-the-dom.html" target="_blank">official docs</a> for more information). Provide function or reference object (<code>(ref: InputElement) => void | React.MutableRefObject</code>) to <code>inputRef</code> prop to connect it with SearchInput.`,
        }
    }
};
