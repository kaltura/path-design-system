import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Detached24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><React.Fragment><g fillRule="nonzero"><path d="M18.364 5.636c1.5147 1.5148 1.5606 3.9422.1377 5.5123l-.1377.1446-2.1214 2.1213c-.3905.3905-1.0236.3905-1.4142 0-.3626-.3626-.3885-.9345-.0777-1.327L14.8284 12l2.1213-2.1213c.7811-.781.7811-2.0474 0-2.8284-.7455-.7456-1.9332-.7795-2.719-.1017l-.1094.1017L12 9.1716c-.3905.3905-1.0237.3905-1.4142 0-.3626-.3627-.3885-.9345-.0777-1.327l.0777-.0872L12.707 5.636c1.5621-1.562 4.0948-1.562 5.6569 0zM5.636 18.364c1.5148 1.5147 3.9422 1.5606 5.5123.1377l.1446-.1377 2.1213-2.1214c.3905-.3905.3905-1.0236 0-1.4142-.3626-.3626-.9345-.3885-1.327-.0777L12 14.8284l-2.1213 2.1213c-.781.7811-2.0474.7811-2.8284 0-.7456-.7455-.7795-1.9332-.1017-2.719l.1017-.1094L9.1716 12c.3905-.3905.3905-1.0237 0-1.4142-.3627-.3626-.9345-.3885-1.327-.0777l-.0872.0777L5.636 12.707c-1.562 1.5621-1.562 4.0948 0 5.6569zM18.364 16.9497c.3905.3906.3905 1.0237 0 1.4143-.3627.3626-.9345.3885-1.327.0777l-.0873-.0777-.707-.7071c-.3906-.3906-.3906-1.0237 0-1.4143.3626-.3626.9344-.3885 1.327-.0777l.0872.0777.707.7071zM14.8284 18.071c.5098 0 .9305.3816.9922.8746l.0078.1255v1.4142c0 .5523-.4477 1-1 1-.5098 0-.9305-.3815-.9922-.8746l-.0078-.1254V19.071c0-.5523.4477-1 1-1zM20.4853 13.8284c.5523 0 1 .4477 1 1 0 .5098-.3815.9305-.8746.9922l-.1254.0078H19.071c-.5523 0-1-.4477-1-1 0-.5098.3815-.9305.8745-.9922l.1255-.0078h1.4142z" /><g><path d="M7.0503 5.636c-.3906-.3905-1.0237-.3905-1.4143 0-.3626.3627-.3885.9345-.0777 1.327l.0777.0873.7071.707c.3906.3906 1.0237.3906 1.4143 0 .3626-.3626.3885-.9344.0777-1.327l-.0777-.0872-.7071-.707zM5.929 9.1716c0-.5098-.3816-.9305-.8746-.9922l-.1255-.0078H3.5147c-.5523 0-1 .4477-1 1 0 .5098.3815.9305.8746.9922l.1254.0078H4.929c.5523 0 1-.4477 1-1zM10.1716 3.5147c0-.5523-.4477-1-1-1-.5098 0-.9305.3815-.9922.8746l-.0078.1254V4.929c0 .5523.4477 1 1 1 .5098 0 .9305-.3815.9922-.8745l.0078-.1255V3.5147z" /></g></g></React.Fragment></svg>
);

export const Detached24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Detached24Svg} {...rest} style={style} />;
}