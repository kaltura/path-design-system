import * as React from 'react';
import { useState } from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { withThemeProvider } from "../storybook/with-theme-provider";
import { DropdownMenu } from './dropdown-menu';

const options = [
  {
    value: '1',
    label: 'Option 1',
  },
  {
    value: '2',
    label: 'Option 2',
  },
  {
    value: '3',
    label: 'Option 3',
    disabled: true,
  },
  {
    value: '4',
    label: 'Option 4',
  },
];

export const Default: Story = () => {
  const [value, setValue] = useState(options[0].value);
  return (
    <DropdownMenu value={value} options={options} onChange={setValue}/>
  );
};


export default {
  title: 'Inputs/Dropdown Menu',
  component: DropdownMenu,
  decorators: [
    withKnobs,
    withThemeProvider,
  ],
  parameters: {
    componentSubtitle: 'To chose item from a list',
  },
};
