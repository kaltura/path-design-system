import * as React from 'react';
import { useRef, useState } from 'react';
import { theme, ThemeProvider } from './theme';
import { action } from '@storybook/addon-actions';
import { SearchInput } from './search-input';

export default {
    title: 'SearchInput',
};

export const DefaultInput: Story = () => {
    const [value, setValue] = useState('');
    const uncontrolledInput = useRef();
    const onChange = (value: string) => {
        action('changed')(value);
        setValue(value);
    };
    return <ThemeProvider theme={theme}>
        <div className="row">
            <div className="col h300">
                <span className="label w150">Default:</span>
                <span className="label w150">With Placeholder:</span>
                <span className="label w150">With Error:</span>
                <span className="label w150">Is Busy:</span>
                <span className="label w150">Disabled:</span>
                <span className="label w150">Uncontrolled:</span>
            </div>
            <div className="spacer"></div>
            <div className="col h300 w400">
                <SearchInput value={value} onChange={onChange}/>
                <SearchInput value={value} placeholder="With Placeholder" onChange={onChange}/>
                <SearchInput value={value} placeholder="With Error" hasError={true} onChange={onChange}/>
                <SearchInput value={value} placeholder="Is Busy" isBusy={true} onChange={onChange}/>
                <SearchInput placeholder="Disabled" disabled={true}/>
                <SearchInput inputRef={uncontrolledInput} placeholder="Uncontrolled"/>
            </div>
        </div>
    </ThemeProvider>;
};

DefaultInput.story = {
    title: 'Default SearchInput',
};
