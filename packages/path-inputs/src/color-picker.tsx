import * as React from 'react';
import {useEffect, useState} from 'react';
import './hint.css';
import {
  ChromePicker,
  Color,
  ColorResult,
  HSLColor,
  RGBColor,
} from 'react-color';
import {
  createUseStyles,
  Theme,
  theming,
} from '@kaltura-react-ui-kits/path-theming';
import {Popover} from 'antd';

const classNames = require('classnames');

export interface ColorPickerProps {
  /**
   * Default selected color
   */
  defaultColor?: Color;
  /**
   * Use specific color scheme: hex | hsl | rgb
   */
  colorScheme?: string;
  /**
   * Selected color
   */
  value?: Color;
  /**
   * Disable color-picker
   */
  disabled?: boolean;
  /**
   * Event handler on change color
   */
  onChange?: (value: Color) => void;
  /**
   * Event handler on change css color
   */
  onColorChange?: (value: string) => void;
  /**
   * ClassName of wrapped element
   */
  className?: string;
}

const useStyles = createUseStyles(
  (theme: Theme) => ({
    colorContainer: {
      cursor: 'pointer',
      width: 32,
      height: 32,
      borderRadius: 4,
      border: `solid 1px ${theme.colors.grayscale3}`,
      overflow: 'hidden',
    },
    backgroundColor: {
      width: '100%',
      height: '100%',
    },
    backgroundPattern: {
      backgroundImage: `linear-gradient(-45deg, ${theme.colors.grayscale3} 25%, transparent 25%),
      linear-gradient(45deg, ${theme.colors.grayscale3} 25%, transparent 25%),
      linear-gradient(-45deg, transparent 75%, ${theme.colors.grayscale3} 75%),
      linear-gradient(45deg, transparent 75%, ${theme.colors.grayscale3} 75%)`,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    },
    disabled: {
      background: `repeating-linear-gradient(45deg,
      ${theme.colors.grayscale3},
      ${theme.colors.grayscale3} 5px,
      ${theme.colors.grayscale4} 5px,
      ${theme.colors.grayscale4} 10px) !important`,
      '&$backgroundPattern': {
        backgroundImage: 'none',
        backgroundSize: 'unset',
        backgroundPosition: 'unset',
      },
      '& $backgroundColor': {
        display: 'none',
      },
    },
    paletteContainer: {
      padding: 0,
      margin: 0,
      color: 'inherit',
      '& .ant-popover-content .ant-popover-arrow': {
        display: 'none',
      },
      '& .ant-popover-content .ant-popover-inner .ant-popover-inner-content': {
        padding: 0,
        color: 'inherit',
      },
    },
  }),
  {theming}
);

const isRGBColor = (color: any): color is RGBColor =>
  typeof color === 'object' && 'r' in color && 'g' in color && 'b' in color;
const isHSLColor = (color: any): color is HSLColor =>
  typeof color === 'object' && 'h' in color && 'l' in color && 's' in color;
const isHEXColor = (color: any): color is string => typeof color === 'string';

export const ColorToCss = (color: Color | undefined): string => {
  if (isRGBColor(color)) {
    const {r, g, b, a} = color;
    return `rgba(${r},${g}, ${b}, ${a})`;
  }
  if (isHSLColor(color)) {
    const {h, s, l} = color;
    return `hsl(${h},${s}%, ${l}%)`;
  }
  if (isHEXColor(color)) {
    return color;
  }
  if (typeof color !== 'undefined') {
    console.warn('Provided color is not in supported format');
  }
  return '';
};

/**
 * The color picker is component which shows color palette on click and allowed user to choose color
 */
export function ColorPicker(props: ColorPickerProps) {
  const {
    defaultColor,
    colorScheme = 'rgb',
    value,
    onChange,
    onColorChange,
    className,
    disabled,
  } = props;
  const [isControlled] = useState(typeof value !== 'undefined');
  const [color, setColor] = useState<Color | undefined>(value || defaultColor);
  const [colorPaletteVisible, setColorPaletteVisible] = useState(false);
  const classes = useStyles(props);

  useEffect(() => {
    setColor(value || defaultColor);
  }, [value]);

  const handleChange = (color: ColorResult) => {
    if (disabled) {
      return;
    }

    if (!isControlled) {
      setColor(color[colorScheme]);
    }

    if (onChange) {
      onChange(color[colorScheme]);
    }

    if (onColorChange) {
      const cssColor = ColorToCss(color[colorScheme]);
      onColorChange(cssColor);
    }
  };

  const handlePaletteVisibility = () => {
    if (disabled) {
      return;
    }

    setColorPaletteVisible(!colorPaletteVisible);
  };

  const paletteContainer = (
    <ChromePicker color={color} onChange={handleChange} />
  );

  return (
    <Popover
      content={paletteContainer}
      overlayClassName={classes.paletteContainer}
      trigger="click"
      visible={colorPaletteVisible}
      onVisibleChange={handlePaletteVisibility}>
      <div
        className={classNames(
          className,
          classes.colorContainer,
          classes.backgroundPattern,
          {
            [classes.disabled]: disabled,
          }
        )}>
        <div
          style={{backgroundColor: ColorToCss(color)}}
          className={classes.backgroundColor}
        />
      </div>
    </Popover>
  );
}

ColorPicker.defaultProps = {
  disabled: false,
  className: '',
  defaultColor: '#fff',
};
