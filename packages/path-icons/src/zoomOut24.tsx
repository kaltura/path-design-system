import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const ZoomOut24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M10.719 8.3892l-3.7846 6.1682c-.2888.4708-.1413 1.0865.3294 1.3753a1 1 0 00.523.1477h7.5693c.5522 0 1-.4477 1-1a1 1 0 00-.1477-.523l-3.7846-6.1682c-.2889-.4708-.9046-.6182-1.3753-.3294a1 1 0 00-.3294.3294z" /></svg>
);

export const ZoomOut24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={ZoomOut24Svg} {...rest} style={style} />;
}
