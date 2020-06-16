import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Pencil24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M14.1213 4.2218c.781-.781 2.0474-.781 2.8284 0l2.8285 2.8285c.781.781.781 2.0473 0 2.8284l-8.1924 8.1924a2 2 0 01-1.4142.5858H6.343c-.5522 0-1-.4478-1-1v-3.8285a2 2 0 01.5858-1.4142zm-.9192 3.7477l-5.859 5.859-.0001 2.8285 2.8286-.0001 5.859-5.859-2.8285-2.8284zm2.3334-2.3335l-.9192.9193 2.8284 2.8284.9193-.9192-2.8285-2.8285z" /></g></svg>
);

export const Pencil24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Pencil24Svg} {...rest} style={style} />;
}
