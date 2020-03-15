import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Plus16Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path d="M8 3c.5523 0 1 .4477 1 1v3h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H9v3c0 .5523-.4477 1-1 1s-1-.4477-1-1V9H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h3V4c0-.5523.4477-1 1-1z" /></g></svg>
);

export const Plus16Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '16px'};
  return <Icon component={Plus16Svg} {...rest} style={style} />;
}
