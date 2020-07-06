import * as React from 'react';
import { useRef, useState } from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withThemeProvider } from '../storybook/with-theme-provider';
import { createUseStyles } from '@kaltura-react-ui-kits/path-theming';
import { TextAreaInput } from './text-area-input';

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
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    action('changed')(event);
    setValue(event.target.value);
  };
  return <div className={classes.table}>
    <div className={classes.row}>
      <div>Default</div>
      <TextAreaInput value={value}
                     placeholder="type value here"
                     onChange={onChange}/>

    </div>
  </div>
};

Default.story = {
  parameters: {
    docs: {
      storyDescription: `TextAreaInput supports React Refs (check out <a href="https://reactjs.org/docs/refs-and-the-dom.html" target="_blank">official docs</a> for more information). Provide function or reference object (<code>(ref: InputElement) => void | React.MutableRefObject</code>) to <code>inputRef</code> prop to connect it with TextInput.`,
    }
  }
};


export const TextAreaInputPlaceholder: Story = () => {
  return (
    <div className='row'>
      <div className='col w400'>
        <TextAreaInput placeholder="Placeholder value"/>
      </div>
    </div>
  );
};

TextAreaInputPlaceholder.story = {
  parameters: {
    docs: {
      storyDescription: `The <code>placeholder</code> prop specifies a short hint that describes the expected value of an input field and is displayed in the input field before the user enters a value.`,
    }
  }
};

export const TextAreaInputValue: Story = () => {
  const [value, setValue] = useState('Initial value');
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    action('changed')(event);
    setValue(event.target.value);
  };

  return (
    <div className='row'>
      <div className='col w400'>
        <TextAreaInput value={value} onChange={onChange}/>
      </div>
    </div>
  );
};

TextAreaInputValue.story = {
  parameters: {
    docs: {
      storyDescription: `Like for default HTML textarea, you can provide <code>value/onChange</code> pair of properties to be able control user's input.`,
    }
  }
};

export const TextAreaInputError: Story = () => {
  return (
    <div className='row'>
      <div className='col w400'>
        <TextAreaInput placeholder="Input with error" hasError={true}/>
      </div>
    </div>
  );
};

TextAreaInputError.story = {
  parameters: {
    docs: {
      storyDescription: `In case a user has to be notified that input value is invalid you can set <code>hasError</code> prop to <code>true</code> that will add change TextAreaInput style (add permanent red border) to indicate it has an error.`,
    }
  }
};

export const TextAreaInputDisabled: Story = () => {
  return (
    <div className='row'>
      <div className='col w400'>
        <TextAreaInput placeholder="Disabled textarea" disabled={true}/>
      </div>
    </div>
  );
};

TextAreaInputDisabled.story = {
  parameters: {
    docs: {
      storyDescription: `To prevent user from being able to input anything in TextAreaInput set <code>disabled</code> prop to <code>true</code>.`,
    }
  }
};

export const UncontrolledComponent: Story = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div className='row'>
      <div className='col w400'>
        <TextAreaInput inputRef={inputRef} defaultValue="Initial input value"/>
      </div>
    </div>
  );
};

UncontrolledComponent.story = {
  parameters: {
    docs: {
      storyDescription: `TextAreaInput supports React Refs (check out <a href="https://reactjs.org/docs/refs-and-the-dom.html" target="_blank">official docs</a> for more information). Provide function or reference object (<code>(ref: HTMLTextAreaElement) => void | React.MutableRefObject</code>) to <code>inputRef</code> prop to connect it with TextAreaInput.`,
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
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    action('changed')(event);
    setValue(event.target.value);
  };
  return <div className="row">
    <div className="col h300">
      <span className="label w150">Default:</span>
    </div>
    <div className="spacer"></div>
    <div className="col h300 w400">
      <TextAreaInput value={value}
                     placeholder="Default"
                     hasError={boolean("Has Error", false)}
                     disabled={boolean("Disabled", false)}
                     transparent={boolean("transparent", false)}
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
  title: 'Inputs/TextArea Input',
  component: TextAreaInput,
  decorators: [
    withKnobs,
    withThemeProvider,
  ],
  parameters: {
    componentSubtitle: `To get a user's input`,
  },
};
