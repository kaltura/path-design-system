import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const ArrowLeft16Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><React.Fragment><g fillRule="evenodd"><path transform="scale(Infinity, Infinity)" d="M0 0h16v16H0z" /><path transform="scale(Infinity, Infinity)" fillRule="nonzero" d="M7.4142 8l2.293 2.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142l3-3c.3905-.3905 1.0237-.3905 1.4142 0 .3905.3905.3905 1.0237 0 1.4142L7.4142 8z" /></g></React.Fragment></svg>
);

export const ArrowLeft16Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '16px'};
  return <Icon component={ArrowLeft16Svg} {...rest} style={style} />;
}
