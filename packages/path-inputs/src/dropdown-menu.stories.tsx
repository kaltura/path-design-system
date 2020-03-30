import * as React from 'react';
import { useState } from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { withThemeProvider } from "../storybook/with-theme-provider";
import { DropdownMenu } from './dropdown-menu';
import { createUseStyles } from '@kaltura-react-ui-kits/path-theming';

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

const useStyles = createUseStyles({
  container: {
    width: '400px',
    height: '100px',
    padding: '10px'
  }
});

export const Default: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState('1');

  return (
    <div className={classes.container}>
      <DropdownMenu value={value} options={options} onChange={setValue}/>
    </div>
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
