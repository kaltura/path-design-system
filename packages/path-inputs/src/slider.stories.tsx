import * as React from 'react';
import { withThemeProvider } from '../storybook/with-theme-provider';
import { withKnobs } from '@storybook/addon-knobs';
import { Slider } from './slider';
import { createUseStyles } from '@kaltura-react-ui-kits/path-theming';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';

const useStyles = createUseStyles({
  container: {
    width: '300px',
    padding: '50px'
  }
});

export const Default: Story = () => {
  const classes = useStyles();
  const [value, setValue] = useState(10);

  const handleChange = (e: number) => {
    setValue(e);
    action('onChange')(e);
  };

  return (
    <div className={classes.container}>
      <Slider value={value}
              affixContent={}
              onChange={handleChange}/>
    </div>
  );
};

export default {
  title: 'Inputs/Slider',
  decorators: [
    withThemeProvider,
    withKnobs,
  ],
  component: Slider,
  parameters: {
    componentSubtitle: ``,
  },
};
