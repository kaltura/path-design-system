import * as React from 'react';
import {action} from "@storybook/addon-actions";
import {ChangeEvent, useState} from "react";
import TimeInput from "./time-input";
import {withKnobs} from "@storybook/addon-knobs";
import {withThemeProvider} from "../storybook/with-theme-provider";
import {createUseStyles} from "@kaltura-react-ui-kits/path-theming";
import {TextInput} from "./text-input";

const useStyles = createUseStyles({
  'inputContainer': {
    margin: '20px',
    width: '80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const TimeInputValue: Story = () => {

  const [value, setValue] = useState('00:00:00');

  const classes = useStyles();

  const onChange = (event: ChangeEvent<HTMLInputElement>, time: string) => {
    action('changed')(event);
    setValue(time);
  };

  return (
    <div className={classes.inputContainer}>
      <TimeInput value={value}
                 onChange={onChange}
                 input={<TextInput />}
                 showSeconds={true}/>
    </div>
  );
};

TimeInputValue.story = {
  parameters: {
    docs: {
      storyDescription: `time input`
    }
  }
};

export default {
  title: 'Inputs/Time Input',
  component: TimeInput,
  decorators: [
    withKnobs,
    withThemeProvider,
  ],
  parameters: {
    componentSubtitle: `Time input`,
  },
};
