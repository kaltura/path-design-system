import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Close24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path transform="scale(Infinity, Infinity)" d="M13.4142 12l4.2427 4.2426c.3905.3906.3905 1.0237 0 1.4143-.3906.3905-1.0237.3905-1.4143 0L12 13.4142 7.7574 17.657c-.3906.3905-1.0237.3905-1.4143 0-.3905-.3906-.3905-1.0237 0-1.4143L10.5858 12 6.343 7.7574c-.3905-.3906-.3905-1.0237 0-1.4143.3906-.3905 1.0237-.3905 1.4143 0L12 10.5858l4.2426-4.2427c.3906-.3905 1.0237-.3905 1.4143 0 .3905.3906.3905 1.0237 0 1.4143L13.4142 12z" /></g></svg>
);

export const Close24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Close24Svg} {...rest} style={style} />;
}
