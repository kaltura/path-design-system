import * as React from 'react';
import { useState } from 'react';
import { theme, ThemeProvider } from './theme';
import { TextInput } from './input';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Video24Icon } from '@kaltura-path/ui-icons';

export default {
    title: 'TextInput',
    decorators: [withKnobs]
};

export const DefaultInput: Story = () => {
    const [value, setValue] = useState('test');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        action('changed')(event);
        setValue(event.target.value);
    };
    return <ThemeProvider theme={theme}>
        <div className="row">
            <div className="col">
                <span className="label" style={{ 'color': 'white' }}>spacer</span>
                <span className="label">Default:</span>
                <span className="label">With Icon:</span>
            </div>
            <div className="spacer"></div>
            <div className="col w400">
                <span className="label">Label</span>
                <TextInput value={value}
                           placeholder="Default"
                           hasError={boolean("Has Error", false)}
                           disabled={boolean("Disabled", false)} onChange={onChange}/>
                <TextInput defaultValue={value}
                           placeholder="With Icon"
                           preContent={<Video24Icon/>}
                           postContent={<Video24Icon/>}
                           hasError={boolean("Has Error", false)}
                           disabled={boolean("Disabled", false)}
                           onChange={onChange}/>
            </div>
        </div>
    </ThemeProvider>;
};

DefaultInput.story = {
    title: 'Default TextInput',
};
