import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Film24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M18 3c1.6569 0 3 1.3431 3 3v12c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3zM7 17H5v1c0 .5128.386.9355.8834.9933L6 19h1v-2zm8-12H9v14h6V5zm4 12h-2v2h1c.5128 0 .9355-.386.9933-.8834L19 18v-1zm0-4h-2v2h2v-2zM7 13H5v2h2v-2zm12-4h-2v2h2V9zM7 9H5v2h2V9zm0-4H6c-.5523 0-1 .4477-1 1v1h2V5zm11 0h-1v2h2V6c0-.5128-.386-.9355-.8834-.9933L18 5z" /></svg>
);

export const Film24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Film24Svg} {...rest} style={style} />;
}
