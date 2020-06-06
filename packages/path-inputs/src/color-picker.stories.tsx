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
  return <ColorPicker />;
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

TransparentColor.story = {
  parameters: {
    docs: {
      storyDescription: `Disabled Color Picker.`,
    },
  },
};

export const ControlledColorPicker: Story = () => {
  const [color, setColor] = useState<Color>();
  return <ColorPicker value={color} onChange={setColor} />;
};

ControlledColorPicker.story = {
  parameters: {
    docs: {
      storyDescription: `Controlled Color Picker component.`,
    },
  },
};

export const DifferentColorSchemeColorPicker: Story = () => {
  const classes = useStyles();
  return (
    <div className={classes.row}>
      <ColorPicker colorScheme="rgb" />
      <ColorPicker colorScheme="hsl" />
      <ColorPicker colorScheme="hex" />
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
