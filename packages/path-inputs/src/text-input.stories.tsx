import * as React from 'react';
import { useRef, useState } from 'react';
import { TextInput } from './text-input';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withThemeProvider } from '../storybook/with-theme-provider';
import { Target24Icon, Upload24Icon, Video24Icon } from '@kaltura-react-ui-kits/path-icons';
import { createUseStyles } from './theme';

const useStyles = createUseStyles({
    'table': {
        display: 'flex',
        justifyContent: 'space-between',

    },
    'row': {
        display: 'flex',
        flexDirection: 'column',
    }
});

/**
 * Workshop & Documentation page stories
 */

export const Default: Story = () => {
    const [value, setValue] = useState('');
    const classes = useStyles();
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        action('changed')(event);
        setValue(event.target.value);
    };
    return <div className={classes.table} >
            <div className={classes.row} >
                <div>Default</div>
                <TextInput value={value}
                           placeholder="type value here"
                           onChange={onChange}/>

            </div>
            <div className={classes.row} >
                <div>With pre & post content</div>
                <TextInput value={value}
                           placeholder="type value here"
                           preContent={<Video24Icon/>}
                           postContent="px"
                           onChange={onChange}/>

            </div>
            <div className={classes.row} >
                <div>With busy mode</div>
                <TextInput value={value}
                           placeholder="type value here"
                           supportBusy={true}
                           isBusy={true}
                           onChange={onChange}/>
            </div>
        </div>
};

Default.story = {
    parameters: {
        docs: {
            storyDescription: `TextInput supports React Refs (check out <a href="https://reactjs.org/docs/refs-and-the-dom.html" target="_blank">official docs</a> for more information). Provide function or reference object (<code>(ref: InputElement) => void | React.MutableRefObject</code>) to <code>inputRef</code> prop to connect it with TextInput.`,
        }
    }
};



export const TextInputPlaceholder: Story = () => {
    return (
        <div className='row'>
            <div className='col w400'>
                <TextInput placeholder="Placeholder value"/>
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


export const TextInputPreAndPostContent: Story = () => {
    return (
        <>
            <div className='row'>
                <div className='col w400'>
                    <TextInput preContent={<Upload24Icon/>} placeholder={'text input with pre content'} />
                </div>
            </div>

            <div className='row'>
                <div className='col w400'>
                    <TextInput postContent={<Target24Icon/>} placeholder={'text input with post content'}/>
                </div>
            </div>

            <div className='row'>
                <div className='col w400'>
                    <TextInput preContent={<Video24Icon/>} placeholder={'text input with pre & post content'} postContent="duration"/>
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

export const UncontrolledComponent: Story = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div className='row'>
            <div className='col w400'>
                <TextInput inputRef={inputRef} defaultValue="Initial input value" />
            </div>
        </div>
    );
};

UncontrolledComponent.story = {
    parameters: {
        docs: {
            storyDescription: `TextInput supports React Refs (check out <a href="https://reactjs.org/docs/refs-and-the-dom.html" target="_blank">official docs</a> for more information). Provide function or reference object (<code>(ref: InputElement) => void | React.MutableRefObject</code>) to <code>inputRef</code> prop to connect it with TextInput.`,
        }
    }
};


// TODO: should move this section to the top of the file.
/**
 * Workshop only stories
 *
 */

export const Workshop: Story = () => {
    const [value, setValue] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        action('changed')(event);
        setValue(event.target.value);
    };
    return <div className="row">
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
    </div>;
};


Workshop.story = {
    parameters: {
        docs: {
            disable: true,
            storyDescription: `An example that includes all the features to be able to test them together.
            It is here for internal use only and will be removed from the documentation soon.`,
        }
    }
};

export default {
    title: 'Inputs/Text Input',
    component: TextInput,
    decorators: [
        withKnobs,
        withThemeProvider,
    ],
    parameters: {
        componentSubtitle: `To get a user's input`,
    },
};
