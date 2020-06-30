import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Italic24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M9 17.65l.285-1.47h1.26l1.5-7.695H10.77L11.055 7h4.53L15.3 8.485h-1.29l-1.5 7.695h1.275l-.285 1.47z" /></svg>
);

export const Italic24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Italic24Svg} {...rest} style={style} />;
}
