import * as React from 'react';
import { useState } from 'react';
import { withThemeProvider } from '../storybook/with-theme-provider';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { RadioGroup } from './radio-group';
import { RadioChangeEvent } from 'antd/es/radio';
import { action } from '@storybook/addon-actions';
import { createUseStyles } from '@kaltura-react-ui-kits/path-theming';

const useStyles = createUseStyles({
  container: {
    padding: '50px'
  }
});

export const Default: Story = () => {
  const [value, setValue] = useState(1);
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    action('onChange')(e)
  };

  return (
    <RadioGroup value={value} onChange={handleChange} options={options}/>
  );
};

export const Change: Story = () => {
  const [value, setValue] = useState(1);
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    action('onChange')(e)
  };

  return (
    <RadioGroup value={value} onChange={handleChange} options={options}/>
  );
};

Change.story = {
  parameters: {
    docs: {
      storyDescription: `RadioGroup is controlled component to make it work <code>value</code> and <code>onChange</code> properties must be provided.`,
    }
  }
};

export const Disabled: Story = () => {
  const [value, setValue] = useState(1);
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
  ];

  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    action('onChange')(e)
  };

  return (
    <RadioGroup disabled={true}
                value={value}
                onChange={handleChange}
                options={options}/>
  );
};

Disabled.story = {
  parameters: {
    docs: {
      storyDescription: `To prevent a user form interacting with the component set <code>disabled</code> property to <code>true</code>.`,
    }
  }
};

export const DisabledOption: Story = () => {
  const [value, setValue] = useState(1);
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2, disabled: true },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4, disabled: true },
  ];

  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    action('onChange')(e)
  };

  return (
    <RadioGroup value={value} onChange={handleChange} options={options}/>
  );
};

DisabledOption.story = {
  parameters: {
    docs: {
      storyDescription: `To prevent a user form interacting with certain options provide <code>disabled</code> property for an item in the options array.`,
    }
  }
};

export const Workshop: Story = () => {
  const [value, setValue] = useState(1);
  const classes = useStyles();
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4, disabled: true },
  ];

  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    action('onChange')(e)
  };

  return (
    <div className={classes.container}>
      <RadioGroup value={value}
                  onChange={handleChange}
                  options={options}
                  disabled={boolean('Disabled', false)}/>
    </div>
  );
};

Workshop.story = {
  parameters: {
    docs: {
      disable: true,
      storyDescription: `An example that includes all the features to be able to test them together. It is here for internal use only and will be removed from the documentation soon.`,
    }
  }
};

export default {
  title: 'Inputs/Radio Group',
  decorators: [
    withThemeProvider,
    withKnobs,
  ],
  component: RadioGroup,
  parameters: {
    componentSubtitle: `The difference from Select is that Radio is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.`,
  },
};
