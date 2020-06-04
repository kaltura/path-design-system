import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';
// @ts-ignore cannot install @types/rc-slider because it will cause react typings conflict
import RcSlider, { createSliderWithTooltip } from 'rc-slider';
import {
  createUseStyles,
  Theme,
  theming
} from '@kaltura-react-ui-kits/path-theming';

const classNames = require('classnames');

export interface SliderProps {
  /**
   * Current value of the slider
   */
  value?: number;

  /**
   * The default value of the slider is used when `value` is not provided
   */
  defaultValue?: number;

  /**
   * Change event. Fires once user stop dragging
   */
  onAfterChange?: (value: number) => void;

  /**
   * Change event. Fires while user dragging
   */
  onChange?: (value: number) => void;

  /**
   * Flag reflects disabled state of the slider
   */
  disabled?: boolean;

  /**
   * Min value slider value can be set
   */
  min?: number;

  /**
   * Max value slider value can be set
   */
  max?: number;

  /**
   * Step of the slide
   */
  step?: number;

  /**
   * Affix content that is displayed to the left of slider
   */
  affixContent?: string | ReactElement;

  /**
   * Postfix content that is displayed to the right of slider
   */
  postfixContent?: string | ReactElement;

  /**
   * Flag controls whether show or hide handle tooltip
   */
  showTooltip?: boolean;

  /**
   * Function that allows to set custom tooltip formatting
   */
  tooltipFormatter?: (value: number) => string | number;

  /**
   * Additional className for styling of slider container
   */
  className?: string;
}

const prefixCls = 'path-slider';
const tipPrefixCls = 'path-slider-tooltip';
const SliderWithTooltip = createSliderWithTooltip(RcSlider);

const useStyles = createUseStyles((theme: Theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .path-slider': {
      position: 'relative',
      height: '14px',
      padding: '5px 0',
      margin: '0 8px',
      width: '100%',
      borderRadius: '6px',
      touchAction: 'none',
      boxSizing: 'border-box'
    },
    '& .path-slider *': { boxSizing: 'border-box' },
    '& .path-slider-rail': {
      position: 'absolute',
      width: '100%',
      backgroundColor: theme.colors.grayscale4,
      height: '4px',
      borderRadius: '4px'
    },
    '& .path-slider-track': { display: 'none' },
    '& .path-slider-handle': {
      position: 'absolute',
      width: '16px',
      height: '16px',
      marginTop: '-5px',
      cursor: 'grab',
      borderRadius: '50%',
      backgroundColor: theme.colors.grayscale1,
      touchAction: 'pan-x'
    },
    '& .path-slider-handle-dragging.path-slider-handle-dragging.path-slider-handle-dragging': {
      backgroundColor: theme.colors.grayscale2
    },
    '& .path-slider-handle:focus': { outline: 'none' },
    '& .path-slider-handle-click-focused:focus': { boxShadow: 'unset' },
    '& .path-slider-handle:active': {
      backgroundColor: theme.colors.grayscale2,
      cursor: 'grabbing'
    },
    '& .path-slider-mark': {
      position: 'absolute',
      top: '18px',
      left: '0',
      width: '100%',
      fontSize: '12px'
    },
    '& .path-slider-mark-text': {
      position: 'absolute',
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'center',
      cursor: 'pointer',
      color: theme.colors.grayscale3
    },
    '& .path-slider-mark-text-active': { color: theme.colors.grayscale2 },
    '& .path-slider-step': {
      position: 'absolute',
      width: '100%',
      height: '4px',
      background: 'transparent'
    },
    '& .path-slider-dot': {
      position: 'absolute',
      bottom: '-2px',
      marginLeft: '-4px',
      width: '8px',
      height: '8px',
      border: `2px solid ${theme.colors.grayscale5}`,
      backgroundColor: theme.colors.white,
      cursor: 'pointer',
      borderRadius: '50%',
      verticalAlign: 'middle'
    },
    '& .path-slider-dot-reverse': { marginRight: '-4px' },
    '& .path-slider-disabled .path-slider-track': { backgroundColor: theme.colors.grayscale4 },
    '& .path-slider-disabled .path-slider-handle, & .path-slider-disabled .path-slider-dot': {
      boxShadow: 'none',
      backgroundColor: theme.colors.grayscale4,
      cursor: 'not-allowed'
    },
    '& .path-slider-disabled .path-slider-mark-text, & .path-slider-disabled .path-slider-dot': {
      cursor: 'not-allowed !important'
    },
    '& .path-slider-vertical': { width: '14px', height: '100%', padding: '0 5px' },
    '& .path-slider-vertical .path-slider-rail': { height: '100%', width: '4px' },
    '& .path-slider-vertical .path-slider-track': {
      left: '5px',
      bottom: '0',
      width: '4px'
    },
    '& .path-slider-vertical .path-slider-handle': {
      marginLeft: '-5px',
      touchAction: 'pan-y'
    },
    '& .path-slider-vertical .path-slider-mark': {
      top: '0',
      left: '18px',
      height: '100%'
    },
    '& .path-slider-vertical .path-slider-step': { height: '100%', width: '4px' },
    '& .path-slider-vertical .path-slider-dot': {
      left: '2px',
      marginBottom: '-4px'
    },
    '& .path-slider-vertical .path-slider-dot:first-child': {
      marginBottom: '-4px'
    },
    '& .path-slider-vertical .path-slider-dot:last-child': { marginBottom: '-4px' },
  },
  affix: {
    marginRight: '8px'
  },
  postfix: {
    marginLeft: '8px'
  },
  '@global': {
    '.path-slider-tooltip': {
      position: 'absolute',
      left: '-9999px',
      top: '-9999px',
      visibility: 'visible',
      boxSizing: 'border-box'
    },
    '.path-slider-tooltip *': { boxSizing: 'border-box' },
    '.path-slider-tooltip-hidden': { display: 'none' },
    '.path-slider-tooltip-placement-top': { padding: '4px 0 8px 0' },
    '.path-slider-tooltip-inner': {
      padding: '6px',
      minWidth: '24px',
      height: '24px',
      fontSize: '12px',
      lineHeight: '1',
      color: theme.colors.white,
      minHeight: 'unset',
      textAlign: 'center',
      textDecoration: 'none',
      backgroundColor: theme.colors.grayscale1,
      borderRadius: '6px',
      boxShadow: `0 0 4px ${theme.colors.grayscale5}`,
      whiteSpace: 'nowrap'
    },
    '.path-slider-tooltip-arrow': {
      position: 'absolute',
      width: '0',
      height: '0',
      borderColor: 'transparent',
      borderStyle: 'solid'
    },
    '.path-slider-tooltip-placement-top .path-slider-tooltip-arrow': {
      bottom: '4px',
      left: '50%',
      marginLeft: '-4px',
      borderWidth: '4px 4px 0',
      borderTopColor: theme.colors.grayscale1
    }
  }
}), { theming });

/**
 * A Slider component for displaying current value in range
 */
export const Slider: FunctionComponent<SliderProps> = (props: SliderProps) => {
  const {
    value,
    defaultValue,
    step,
    min,
    max,
    disabled,
    tooltipFormatter,
    affixContent,
    postfixContent,
    onChange,
    onAfterChange,
    showTooltip,
    className
  } = props;
  const classes = useStyles();
  const sliderProps = {
    defaultValue,
    disabled,
    prefixCls,
    min,
    max,
    step,
    onChange,
    onAfterChange,
    tipProps: { prefixCls: tipPrefixCls },
    tipFormatter: tooltipFormatter,
  };

  if (value) { // in order to work with the defaultValue set `value` only if provided by user
    Object.assign(sliderProps, { value });
  }

  return (
    <div className={classNames(classes.container, className)}>
      {affixContent && <div className={classes.affix}>{affixContent}</div>}
      {
        showTooltip
          ? <SliderWithTooltip {...sliderProps}/>
          : <RcSlider {...sliderProps}/>
      }
      {postfixContent &&
      <div className={classes.postfix}>{postfixContent}</div>}
    </div>
  );
};

Slider.defaultProps = {
  step: 1,
  min: 0,
  max: 100,
  showTooltip: true,
  defaultValue: 0,
  onChange: () => {
  },
  onAfterChange: () => {
  },
  tooltipFormatter: (value: number) => value,
};
