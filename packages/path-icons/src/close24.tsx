import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Close24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path d="M13.4142 12l4.2427 4.2426c.3905.3906.3905 1.0237 0 1.4143-.3906.3905-1.0237.3905-1.4143 0L12 13.4142 7.7574 17.657c-.3906.3905-1.0237.3905-1.4143 0-.3905-.3906-.3905-1.0237 0-1.4143L10.5858 12 6.343 7.7574c-.3905-.3906-.3905-1.0237 0-1.4143.3906-.3905 1.0237-.3905 1.4143 0L12 10.5858l4.2426-4.2427c.3906-.3905 1.0237-.3905 1.4143 0 .3905.3906.3905 1.0237 0 1.4143L13.4142 12z" /></g></svg>
);

export const Close24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Close24Svg} {...rest} style={style} />;
}
