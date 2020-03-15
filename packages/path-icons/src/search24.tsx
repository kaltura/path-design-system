import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Search24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M10.5 4c3.5899 0 6.5 2.9101 6.5 6.5 0 1.4337-.4642 2.759-1.2505 3.8338l2.9576 2.959c.3905.3906.3905 1.0238 0 1.4143-.3905.3905-1.0237.3905-1.4142 0l-2.9591-2.9576C13.259 16.5358 11.9338 17 10.5 17 6.9101 17 4 14.0899 4 10.5S6.9101 4 10.5 4zm0 2C8.0147 6 6 8.0147 6 10.5S8.0147 15 10.5 15s4.5-2.0147 4.5-4.5S12.9853 6 10.5 6z" /></svg>
);

export const Search24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Search24Svg} {...rest} style={style} />;
}
