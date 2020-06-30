import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const ArrowLeft16Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M7.4142 8l2.293 2.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142l3-3c.3905-.3905 1.0237-.3905 1.4142 0 .3905.3905.3905 1.0237 0 1.4142L7.4142 8z" /></g></svg>
);

export const ArrowLeft16Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '16px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={ArrowLeft16Svg} {...rest} style={style} />;
}
