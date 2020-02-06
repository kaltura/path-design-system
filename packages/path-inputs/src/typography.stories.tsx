import * as React from 'react';
import {boolean, number, select, text, withKnobs} from "@storybook/addon-knobs";
import {withThemeProvider} from "../storybook/with-theme-provider";
import {Typography, TypographyTypes} from "./typography";
import {createUseStyles} from '@kaltura-react-ui-kits/path-theming';

export default {
  title: 'Inputs/Typography',
  component: Typography,
  decorators: [
    withKnobs,
    withThemeProvider,
  ],
  parameters: {
    componentSubtitle: `Displaying and Styling text`,
  },
};

const useStyles = createUseStyles({
  container: {
    width: '400px',
    height: '100px',
    padding: '10px'
  }
});

const longText = 'Bryant was the son of former NBA player Joe Bryant. He attended Lower' +
  ' Merion High School in Pennsylvania, where he was recognized as the top' +
  ' high-school basketball player in the country. Upon graduation, he declared' +
  ' for the 1996 NBA draft and was selected by the Charlotte Hornets with the 13th' +
  ' overall pick; the Hornets then traded him to the Lakers. As a rookie,' +
  ' Bryant earned himself a reputation as a high-flyer and a fan favorite by winning' +
  ' the 1997 Slam Dunk Contest, and he was named an All-Star by his second season.';

const typesLabel = 'Typography text types';
const typesOptions = {
  Paragraph: TypographyTypes.Paragraph,
  Label18: TypographyTypes.Label18,
  Label14: TypographyTypes.Label14,
  Label13: TypographyTypes.Label13,
  Label12: TypographyTypes.Label12
};

export const Default: Story = () => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography type={TypographyTypes.Paragraph} rows={3} text={longText}></Typography>
    </div>
  );
};

export const TypographyTextTypes: Story = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        type={select(typesLabel, typesOptions, TypographyTypes.Paragraph)}
        rows={1}
        ellipsis={true}
        text={'This is a text'}></Typography>
    </div>
  );
};

TypographyTextTypes.story = {
  parameters: {
    docs: {
      storyDescription: `Displaying and Styling text of different types`,
    }
  }
};


export const MultiLineEllipsis: Story = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography type={TypographyTypes.Paragraph} rows={3} text={longText}></Typography>
    </div>
  );
};

MultiLineEllipsis.story = {
  parameters: {
    docs: {
      storyDescription: `Displaying and Styling multiline text with ellipsis`,
    }
  }
};

export const SingleLineEllipsis: Story = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography type={TypographyTypes.Paragraph} text={longText}></Typography>
    </div>
  );
};

export const Workshop: Story = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        type={select(typesLabel, typesOptions, TypographyTypes.Paragraph)}
        rows={number('Rows', 1)}
        expandable={boolean('Enable expand', true)}
        ellipsis={boolean('Enable ellipsis', true)}
        text={text('Text content', 'This is a text for testings')}></Typography>
    </div>
  );
};

Workshop.story = {
  parameters: {
    docs: {
      storyDescription: `Displaying and Styling text of different types and length`,
    }
  }
};

SingleLineEllipsis.story = {
  parameters: {
    docs: {
      storyDescription: `Displaying and Styling single line text with ellipsis`,
    }
  }
};
