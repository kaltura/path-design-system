import * as React from 'react';
import {useState} from 'react';
import {createUseStyles} from '@kaltura-react-ui-kits/path-theming';
import '../../../.storybook/obslete-styles.css';
import {ColorPicker} from './color-picker';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {withThemeProvider} from '../storybook/with-theme-provider';
import {action} from '@storybook/addon-actions';

const useStyles = createUseStyles({
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});

export const Default: Story = () => {
  const [color, setColor] = useState('#C71A1A');
  const onChange = (color: string) => {
    action('controlled changed')(color);
    setColor(color);
  };

  return <ColorPicker value={color} onChange={onChange} />;
};

export const TransparentColor: Story = () => {
  return <ColorPicker defaultColor={'rgba(0,0,0,0.4)'} />;
};

TransparentColor.story = {
  parameters: {
    docs: {
      storyDescription: `ColorPicker could display transparent color with RGBa or HSL format.`,
    },
  },
};

export const DisabledColorPicker: Story = () => {
  return <ColorPicker disabled={true} />;
};

DisabledColorPicker.story = {
  parameters: {
    docs: {
      storyDescription: `Disabled Color Picker.`,
    },
  },
};

export const DifferentColorSchemeColorPicker: Story = () => {
  const classes = useStyles();
  const onColorChange = (color: string) => {
    action('color changed')(color);
  };

  return (
    <div className={classes.row}>
      <ColorPicker colorScheme="rgb" onChange={onColorChange} />
      <ColorPicker colorScheme="hsl" onChange={onColorChange} />
      <ColorPicker colorScheme="hex" onChange={onColorChange} />
    </div>
  );
};

DifferentColorSchemeColorPicker.story = {
  parameters: {
    docs: {
      storyDescription: `Could use different color scheme as output result form the Color Picker component.`,
    },
  },
};

export const Workshop: Story = () => {
  const [color, setColor] = useState<string>();
  const onChange = (color: string) => {
    action('controlled changed')(color);
    setColor(color);
  };

  return (
    <ColorPicker
      value={color}
      onChange={onChange}
      disabled={boolean('Disabled', false)}
    />
  );
};

export default {
  title: 'Inputs/ColorPicker',
  component: ColorPicker,
  decorators: [withKnobs, withThemeProvider],
};
