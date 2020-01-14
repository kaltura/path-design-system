import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Home16Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path transform="scale(Infinity, Infinity)" fillRule="nonzero" d="M8.5351 2.1552l.105.0766 6 5c.4244.3535.4817.9841.1281 1.4084-.3263.3916-.8887.4706-1.307.2023l-.1014-.0743L13 8.469V13c0 .5523-.4477 1-1 1h-1c-.5523 0-1-.4477-1-1v-2c0-.5523-.4477-1-1-1H7c-.5523 0-1 .4477-1 1v2c0 .5523-.4477 1-1 1H4c-.5523 0-1-.4477-1-1V8.468l-.3598.3002c-.3917.3264-.959.3026-1.3221-.0366l-.0863-.0914c-.3264-.3917-.3026-.959.0366-1.3221l.0914-.0863 6-5a1.0001 1.0001 0 011.1753-.0766z" /></g></svg>
);

export const Home16Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '16px'};
  return <Icon component={Home16Svg} {...rest} style={style} />;
}
