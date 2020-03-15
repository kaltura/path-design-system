import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const ConnectingArrow16Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M5 5v6c0 .7773.848 1.2574 1.5145.8575l5-3c.6473-.3884.6473-1.3266 0-1.715l-5-3C5.848 3.7425 5 4.2227 5 5z" /></svg>
);

export const ConnectingArrow16Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '16px'};
  return <Icon component={ConnectingArrow16Svg} {...rest} style={style} />;
}
