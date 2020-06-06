import * as React from 'react';
import {useState} from 'react';
import {createUseStyles} from '@kaltura-react-ui-kits/path-theming';
import '../../../.storybook/obslete-styles.css';
import {ColorPicker} from './color-picker';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import {withThemeProvider} from '../storybook/with-theme-provider';
import {Color} from 'react-color';
import {action} from '@storybook/addon-actions';

const useStyles = createUseStyles({
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});

export const Default: Story = () => {
  const [color, setColor] = useState<Color>('#C71A1A');
  const onChange = (color: Color) => {
    action('controlled changed')(color);
    setColor(color);
  };

  const onCssColorChange = (color: string) => {
    action('css-ready color changed')(color);
  };

  return (
    <ColorPicker
      value={color}
      onChange={onChange}
      onColorChange={onCssColorChange}
    />
  );
};

export const TransparentColor: Story = () => {
  return <ColorPicker defaultColor={{r: 0, g: 0, b: 0, a: 0.4}} />;
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
  const onCssColorChange = (color: string) => {
    action('css-ready color changed')(color);
  };

  return (
    <div className={classes.row}>
      <ColorPicker colorScheme="rgb" onColorChange={onCssColorChange} />
      <ColorPicker colorScheme="hsl" onColorChange={onCssColorChange} />
      <ColorPicker colorScheme="hex" onColorChange={onCssColorChange} />
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
  const [color, setColor] = useState<Color>();
  const onChange = (color: Color) => {
    action('controlled changed')(color);
    setColor(color);
  };

  const onCssColorChange = (color: string) => {
    action('css-ready color changed')(color);
  };

  return (
    <ColorPicker
      value={color}
      onChange={onChange}
      onColorChange={onCssColorChange}
      disabled={boolean('Disabled', false)}
    />
  );
};

export default {
  title: 'Inputs/ColorPicker',
  component: ColorPicker,
  decorators: [withKnobs, withThemeProvider],
};
