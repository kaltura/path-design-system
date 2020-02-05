import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Duplicate24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path transform="scale(Infinity, Infinity)" fillRule="nonzero" d="M6 5c-.5523 0-1 .4477-1 1v8c0 .5523.4477 1 1 1h8c.5523 0 1-.4477 1-1V6c0-.5523-.4477-1-1-1H6zm8-2c1.5977 0 2.9037 1.249 2.995 2.8237L17 6c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H9c-1.5977 0-2.9037-1.249-2.995-2.8237L6 17c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3h8zm3 11c0 1.6569-1.3431 3-3 3H8l.0067.1166C8.0645 17.614 8.4872 18 9 18h8c.5523 0 1-.4477 1-1V9c0-.5523-.4477-1-1-1v6z" /></svg>
);

export const Duplicate24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Duplicate24Svg} {...rest} style={style} />;
}
