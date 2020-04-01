import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';
// @ts-ignore
import RcSlider, { createSliderWithTooltip } from 'rc-slider';

import './slider.css';
import { createUseStyles } from '@kaltura-react-ui-kits/path-theming';

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  affixContent?: string | ReactElement;
  postfixContent?: string | ReactElement;
  tooltipFormatter?: (value: number) => string | number;
}

const prefixCls = 'path-slider';
const tipPrefixCls = 'path-slider-tooltip';
const SliderWithTooltip = createSliderWithTooltip(RcSlider);

const useStyles = createUseStyles({
  container: {
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

export const Slider: FunctionComponent<SliderProps> = (props: SliderProps) => {
  const { value, step, min, max, tooltipFormatter, affixContent, postfixContent, onChange } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {affixContent && <div className={classes.affix}>{affixContent}</div>}
      <SliderWithTooltip defaultValue={value}
                         prefixCls={prefixCls}
                         tipProps={{ prefixCls: tipPrefixCls }}
                         min={min}
                         max={max}
                         step={step}
                         tipFormatter={tooltipFormatter}
                         onAfterChange={onChange}/>
      {postfixContent && <div className={classes.postfix}>{postfixContent}</div>}
    </div>
  );
};

Slider.defaultProps = {
  step: 1,
  min: 0,
  max: 100,
  tooltipFormatter: (value: number) => value,
};
