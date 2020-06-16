import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const ConnectingArrow16Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M5 5v6c0 .7773.848 1.2574 1.5145.8575l5-3c.6473-.3884.6473-1.3266 0-1.715l-5-3C5.848 3.7425 5 4.2227 5 5z" /></svg>
);

export const ConnectingArrow16Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '16px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={ConnectingArrow16Svg} {...rest} style={style} />;
}
