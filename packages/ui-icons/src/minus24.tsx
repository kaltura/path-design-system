import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Minus24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><rect width="10" height="2" x="7" y="11" fillRule="evenodd" rx="1" /></svg>
);

export const Minus24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Minus24Svg} {...rest} style={style} />;
}
