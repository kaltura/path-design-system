import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const BrokenMedia32Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M29.7634 4.354c.3293.3892.3098.9568-.0267 1.3224l-.0908.087-2.6188 2.2164c.5612.772.9126 1.7195.9658 2.7502l.0071.2742v9.9916c0 2.6834-2.0403 4.8824-4.5784 4.9993L23.209 26H8.791c-.8424 0-1.6338-.2267-2.3213-.625l-2.8238 2.3884c-.4216.3567-1.0525.3041-1.4093-.1175-.3293-.3891-.3098-.9567.0267-1.3223l.0908-.087 26-22c.4216-.3567 1.0525-.3041 1.4093.1175zm-4.1762 4.8425L18.957 14.806l.6947.4183c.946.5696.941 1.4962 0 2.0628l-4.9388 2.9738c-.7876.4742-1.451.2541-1.6511-.4655L8.1282 23.972c.054.0084.1086.015.1637.0196L8.4907 24h15.0186c1.3122 0 2.4037-1.1111 2.4858-2.5028L26 21.3289V10.671c0-.5456-.152-1.0524-.4128-1.4746zM8.791 6l14.522.0012L20.914 8H8.4907C7.1785 8 6.087 9.1111 6.0049 10.5028L6 10.6711v9.7569l-1.901 1.585a5.2292 5.2292 0 01-.0943-.7942L4 20.9958v-9.9916C4 8.2462 6.1552 6 8.791 6zm5.9219 6.2505l.639.3845L13 14.595 13 13.2093c0-1.0992.772-1.5254 1.7129-.9588z" /></svg>
);

export const BrokenMedia32Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '32px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={BrokenMedia32Svg} {...rest} style={style} />;
}
