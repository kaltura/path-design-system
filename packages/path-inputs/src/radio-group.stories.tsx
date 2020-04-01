import * as React from 'react';
import { withThemeProvider } from '../storybook/with-theme-provider';
import { withKnobs } from '@storybook/addon-knobs';
import { RadioGroup } from './radio-group';
import { createUseStyles } from '@kaltura-react-ui-kits/path-theming';
import { useState } from 'react';
import { RadioChangeEvent } from 'antd/es/radio';
import { action } from '@storybook/addon-actions';

const useStyles = createUseStyles({
  'container': {
    padding: '50px'
  },
});

export const Default: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const options = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2, disabled: true },
    { label: 'Option 3 pot', value: 3 },
    { label: 'Option 4', value: 4 },
  ];

  const handleChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    action('onChange')(e)
  };

  return (
    <div className={classes.container}>
      <RadioGroup value={value} onChange={handleChange} options={options}/>
    </div>
  );
};

export default {
  title: 'Inputs/Radio Group',
  decorators: [
    withThemeProvider,
    withKnobs,
  ],
  component: RadioGroup,
  parameters: {
    componentSubtitle: ``,
  },
};
