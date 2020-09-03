import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Video24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M18.0075 4C20.214 4 22 5.7916 22 8.0034v7.9932C22 18.203 20.204 20 18.0075 20H5.9925C3.786 20 2 18.2084 2 15.9966V8.0034C2 5.797 3.796 4 5.9925 4h12.015zm0 2H5.9925C4.9008 6 4 6.9013 4 8.0034v7.9932C4 17.1052 4.892 18 5.9925 18h12.015C19.0992 18 20 17.0987 20 15.9966V8.0034C20 6.8948 19.108 6 18.0075 6zM11.696 9.2942l2.5825 1.6327c.9367.5923.9394 1.5508 0 2.1447l-2.5825 1.6328c-.9367.5922-1.6961.176-1.6961-.9324v-3.5454c0-1.1072.7567-1.5263 1.6961-.9324z" /></svg>
);

export const Video24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Video24Svg} {...rest} style={style} />;
}
