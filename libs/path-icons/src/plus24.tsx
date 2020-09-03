import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Plus24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="evenodd" d="M13 13v5c0 .5523-.4477 1-1 1s-1-.4477-1-1v-5H6c-.5523 0-1-.4477-1-1s.4477-1 1-1h5V6c0-.5523.4477-1 1-1s1 .4477 1 1v5h5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-5z" /></svg>
);

export const Plus24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Plus24Svg} {...rest} style={style} />;
}
