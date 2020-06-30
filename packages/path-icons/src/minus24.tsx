import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Minus24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><rect width="10" height="2" x="7" y="11" fillRule="evenodd" rx="1" /></svg>
);

export const Minus24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Minus24Svg} {...rest} style={style} />;
}
