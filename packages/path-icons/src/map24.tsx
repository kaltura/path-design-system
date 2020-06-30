import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Map24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M14 17c-1.5977 0-2.9037-1.249-2.995-2.8237L11 14v-4c0-.5128-.386-.9355-.8834-.9933L10 9H9c0 1.6569-1.3431 3-3 3H5c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h1c1.6569 0 3 1.3431 3 3h1c1.5977 0 2.9037 1.249 2.995 2.8237L13 10v4c0 .5128.386.9355.8834.9933L14 15h1c0-1.6569 1.3431-3 3-3h1c1.6569 0 3 1.3431 3 3v2c0 1.6569-1.3431 3-3 3h-1c-1.6569 0-3-1.3431-3-3h-1zm5-3h-1c-.5523 0-1 .4477-1 1v2c0 .5523.4477 1 1 1h1c.5523 0 1-.4477 1-1v-2c0-.5523-.4477-1-1-1zM6 6H5c-.5523 0-1 .4477-1 1v2c0 .5523.4477 1 1 1h1c.5523 0 1-.4477 1-1V7c0-.5523-.4477-1-1-1z" /></g></svg>
);

export const Map24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Map24Svg} {...rest} style={style} />;
}
