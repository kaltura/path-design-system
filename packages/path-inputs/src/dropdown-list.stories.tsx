import * as React from 'react';
import {useState} from 'react';
import '../../../.storybook/obslete-styles.css';
import {withKnobs} from '@storybook/addon-knobs';
import {withThemeProvider} from '../storybook/with-theme-provider';
import {action} from '@storybook/addon-actions';
import {DropdownList, OptionValue} from './dropdown-list';

const options = [
  {value: 1, label: 'First'},
  {value: 2, label: 'Second'},
  {value: 3, label: 'Third'},
];

export const Default: Story = () => {
  const [value, setValue] = useState(1);
  const optionTemplate = (option: OptionValue) => <span>{option.label}</span>;

  const onChange = (newValue: number) => {
    action('controlled changed')(newValue);
    setValue(newValue);
  };

  return (
    <DropdownList
      value={value}
      options={options}
      optionTemplate={optionTemplate}
      onChange={onChange}
    />
  );
};

export const Workshop: Story = () => {
  const [value, setValue] = useState(1);
  const optionTemplate = (option: OptionValue) => <span>{option.label}</span>;

  const onChange = (newValue: number) => {
    action('controlled changed')(newValue);
    setValue(newValue);
  };

  return (
    <DropdownList
      value={value}
      options={options}
      optionTemplate={optionTemplate}
      onChange={onChange}
    />
  );
};

export default {
  title: 'Inputs/DropdownList',
  component: DropdownList,
  decorators: [withKnobs, withThemeProvider],
};
