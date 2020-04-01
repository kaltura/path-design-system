import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Waveform24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path d="M18 4c.5523 0 1 .4477 1 1v14c0 .5523-.4477 1-1 1s-1-.4477-1-1V5c0-.5523.4477-1 1-1zM9 6c.5523 0 1 .4477 1 1v10c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-.5523.4477-1 1-1zM6 8c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-.5523.4477-1 1-1zm9 0c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-.5523.4477-1 1-1zM3 10c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1zm9 0c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1zm9 0c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1z" /></g></svg>
);

export const Waveform24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Waveform24Svg} {...rest} style={style} />;
}
