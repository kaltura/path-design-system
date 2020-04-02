import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const ZoomIn24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M15.0453 7.6637L10.3385 16.53c-.259.4878-.0734 1.0932.4144 1.3522a1 1 0 00.4689.1167h9.4142c.5523 0 1-.4477 1-1a1 1 0 00-.1168-.469l-4.7075-8.8662c-.259-.4878-.8643-.6733-1.3521-.4143a1 1 0 00-.4143.4143zM8.088 9.8597l1.3661 2.5735a1 1 0 010 .9378l-2.1755 4.0979A1 1 0 016.3954 18H3.663c-.5523 0-1-.4477-1-1a1 1 0 01.1167-.4689l3.5417-6.6713c.259-.4878.8643-.6734 1.3521-.4144a1 1 0 01.4144.4144z" /></svg>
);

export const ZoomIn24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={ZoomIn24Svg} {...rest} style={style} />;
}
