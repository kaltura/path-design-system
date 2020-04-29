import * as React from 'react';
import {action} from '@storybook/addon-actions';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {withThemeProvider} from '../storybook/with-theme-provider';
import '../../../.storybook/obslete-styles.css';
import {RadioGroup, RadioItem} from './radio-group';
import {useState} from 'react';
import {createUseStyles} from '@kaltura-react-ui-kits/path-theming';

const useStyles = createUseStyles({
  container: {
    padding: '50px',
  },
});

export const Default: Story = () => {
  const options1: RadioItem[] = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
  ];

  const options2: RadioItem[] = [
    {label: 'Option 1', value: 1, disabled: true},
    {label: 'Option 2', value: 2},
    {label: 'Option 3', value: 3},
  ];

  return (
    <div className="row">
      <div className="col">
        <RadioGroup options={options1} />
      </div>
      <div className="col">
        <RadioGroup options={options2} defaultValue={1} />
      </div>
      <div className="col">
        <RadioGroup options={options2} disabled={true} />
      </div>
    </div>
  );
};

export const Change: Story = () => {
  const [value, setValue] = useState(1);
  const options = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
    {label: 'Option 3', value: 3},
  ];

  const handleChange = (value: number): void => {
    setValue(value);
    action('onChange')(value);
  };

  return <RadioGroup value={value} onChange={handleChange} options={options} />;
};

Change.story = {
  parameters: {
    docs: {
      storyDescription: `RadioGroup could be controlled component. To make it work <code>value</code> and <code>onChange</code> properties must be provided.`,
    },
  },
};

export const DefaultValue: Story = () => {
  const options = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
    {label: 'Option 3', value: 3},
  ];

  return <RadioGroup defaultValue={1} options={options} />;
};

DefaultValue.story = {
  parameters: {
    docs: {
      storyDescription: `RadioGroup could apply default value to preselect an option.`,
    },
  },
};

export const Disabled: Story = () => {
  const options = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
    {label: 'Option 3', value: 3},
  ];

  return <RadioGroup disabled={true} options={options} />;
};

Disabled.story = {
  parameters: {
    docs: {
      storyDescription: `To prevent a user from interacting with the component set <code>disabled</code> property to <code>true</code>.`,
    },
  },
};

export const DisabledOption: Story = () => {
  const options = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2, disabled: true},
    {label: 'Option 3', value: 3},
    {label: 'Option 4', value: 4, disabled: true},
  ];

  return <RadioGroup options={options} />;
};

DisabledOption.story = {
  parameters: {
    docs: {
      storyDescription: `To prevent a user from interacting with certain options provide <code>disabled</code> property for an item in the options array.`,
    },
  },
};

export const Workshop: Story = () => {
  const [value, setValue] = useState(1);
  const classes = useStyles();
  const options = [
    {label: 'Option 1', value: 1},
    {label: 'Option 2', value: 2},
    {label: 'Option 3', value: 3},
    {label: 'Option 4', value: 4, disabled: true},
  ];

  const handleChange = (value: number): void => {
    setValue(value);
    action('onChange')(value);
  };

  return (
    <div className={classes.container}>
      <RadioGroup
        value={value}
        onChange={handleChange}
        options={options}
        disabled={boolean('Disabled', false)}
      />
    </div>
  );
};

Workshop.story = {
  parameters: {
    docs: {
      disable: true,
    },
  },
};

export default {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
  decorators: [withKnobs, withThemeProvider],
  parameters: {
    componentSubtitle:
      'Radio group are a group of two or more radio elements. They allow to select one option at a time from two or more options.',
  },
};
