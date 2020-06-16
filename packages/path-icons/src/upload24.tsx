import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Upload24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="evenodd" d="M19 14c.5523 0 1 .4477 1 1v4c0 .5128-.386.9355-.8834.9933L19 20H5c-.5523 0-1-.4477-1-1v-4c0-.5523.4477-1 1-1s1 .4477 1 1v3h12v-3c0-.5523.4477-1 1-1zM12.0334 3.0006a.9326.9326 0 01.1209.0114.914.914 0 01.1197.0262.9058.9058 0 01.1048.0362.947.947 0 01.1172.0572l.036.0224.0927.0651-.0547-.0401.0115.0074.0533.0409 4.9899 3.9918c.4313.345.5012.9743.1562 1.4056-.345.4313-.9743.5012-1.4056.1562L13 6.081V14c0 .5523-.4477 1-1 1s-1-.4477-1-1V6.081L7.6247 8.7809c-.4313.345-1.0606.275-1.4056-.1562-.345-.4313-.275-1.0606.1562-1.4056l4.9899-3.9918a.9878.9878 0 01.2073-.1314.899.899 0 01.1145-.0457.9301.9301 0 01.1136-.0301c.015-.0031.03-.0058.0444-.0082A1.0076 1.0076 0 0112 3zm.5076.1594l.0206.0126.0084.0064-.029-.019zM11.999 3l-.0843.0036a1.003 1.003 0 01.053-.003L11.999 3z" /></svg>
);

export const Upload24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Upload24Svg} {...rest} style={style} />;
}
