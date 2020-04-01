import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';
// @ts-ignore cannot install @types/rc-slider because it will cause react typings conflict
import RcSlider, { createSliderWithTooltip } from 'rc-slider';
import { createUseStyles } from '@kaltura-react-ui-kits/path-theming';

import './slider.css';

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

const useStyles = createUseStyles({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  affix: {
    marginRight: '8px'
  },
  postfix: {
    marginLeft: '8px'
  }
});

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
