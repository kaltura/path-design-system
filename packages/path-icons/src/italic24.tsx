import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Italic24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fill="#333" d="M9 17.65L9.285 16.18 10.545 16.18 12.045 8.485 10.77 8.485 11.055 7 15.585 7 15.3 8.485 14.01 8.485 12.51 16.18 13.785 16.18 13.5 17.65z"/></svg>
);

export const Italic24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Italic24Svg} {...rest} style={style} />;
}
