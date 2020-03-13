import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Target24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="evenodd" d="M4 15c.5523 0 1 .4477 1 1v3h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1v-4c0-.5523.4477-1 1-1zm16 0c.5523 0 1 .4477 1 1v4l-.0067.1166C20.9355 20.614 20.5128 21 20 21h-4l-.1166-.0067C15.386 20.9355 15 20.5128 15 20c0-.5523.4477-1 1-1h3v-3l.0067-.1166C19.0645 15.386 19.4872 15 20 15zM8 3c.5523 0 1 .4477 1 1s-.4477 1-1 1H5v3c0 .5523-.4477 1-1 1s-1-.4477-1-1V4c0-.5523.4477-1 1-1h4zm8 0h4c.5128 0 .9355.386.9933.8834L21 4v4c0 .5523-.4477 1-1 1-.5128 0-.9355-.386-.9933-.8834L19 8V5h-3c-.5523 0-1-.4477-1-1 0-.5128.386-.9355.8834-.9933L16 3h4z" /></svg>
);

export const Target24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Target24Svg} {...rest} style={style} />;
}
