import * as React from 'react';
import { useState } from 'react';
import { theme, ThemeProvider } from './theme';
import { TextInput } from './text-input';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Video24Icon } from '@kaltura-path/ui-icons';

export default {
    title: 'TextInput',
    decorators: [withKnobs]
};

export const DefaultInput: Story = () => {
    const [value, setValue] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        action('changed')(event);
        setValue(event.target.value);
    };
    return <ThemeProvider theme={theme}>
        <div className="row">
            <div className="col h300">
                <span className="label w150">Default:</span>
                <span className="label w150">With Icon:</span>
                <span className="label w150">With Label:</span>
                <span className="label w150">With Label and Icon:</span>
                <span className="label w150">Toggle Support Busy:</span>
            </div>
            <div className="spacer"></div>
            <div className="col h300 w400">
                <TextInput value={value}
                           placeholder="Default"
                           supportBusy={true}
                           isBusy={boolean("Is Busy", false)}
                           hasError={boolean("Has Error", false)}
                           disabled={boolean("Disabled", false)}
                           onChange={onChange}/>
                <TextInput value={value}
                           placeholder="With Icon"
                           preContent={<Video24Icon/>}
                           supportBusy={true}
                           isBusy={boolean("Is Busy", false)}
                           hasError={boolean("Has Error", false)}
                           disabled={boolean("Disabled", false)}
                           onChange={onChange}/>
                <TextInput value={value}
                           placeholder="With Label"
                           postContent="Label"
                           supportBusy={true}
                           isBusy={boolean("Is Busy", false)}
                           hasError={boolean("Has Error", false)}
                           disabled={boolean("Disabled", false)}
                           onChange={onChange}/>
                <TextInput value={value}
                           placeholder="With Label and Icon"
                           preContent={<Video24Icon/>}
                           postContent="Label that a bit longer"
                           supportBusy={true}
                           isBusy={boolean("Is Busy", false)}
                           hasError={boolean("Has Error", false)}
                           disabled={boolean("Disabled", false)}
                           onChange={onChange}/>
                <TextInput value={value}
                           placeholder="Toggle Support Busy"
                           supportBusy={boolean("Support Busy", false)}
                           isBusy={boolean("Is Busy", false)}
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
