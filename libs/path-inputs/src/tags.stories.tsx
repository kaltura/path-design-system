import * as React from 'react';
import {Tag} from "./tag";
import {createUseStyles} from '@kaltura-react-ui-kits/path-theming';
import {text, withKnobs} from "@storybook/addon-knobs";
import {withThemeProvider} from "../storybook/with-theme-provider";

const useStyles = createUseStyles({
  tagContaner: {
    maxWidth: '120px',
    marginTop: '15px',
    marginLeft: '15px'
  }
});

export const Default: Story = () => {

  const classes = useStyles();

  return (
    <div className={classes.tagContaner}>
      <Tag label={'Default'}/>
    </div>
  );
};

export const SingleTag: Story = () => {

  const classes = useStyles();

  return (
    <div className={classes.tagContaner}>
      <Tag label={text('Tag text', 'singleTag')}/>
    </div>
  )
};

SingleTag.story = {
  parameters: {
    docs: {
      storyDescription: `A tag`,
    }
  }
};


export default {
  title: 'Inputs/Tag',
  component: Tag,
  decorators: [
    withKnobs,
    withThemeProvider,
  ],
  parameters: {
    componentSubtitle: 'A tag component.',
  },
};
