import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Trash24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path transform="scale(Infinity, Infinity)" fillRule="nonzero" d="M15.003 4c.5506 0 .997.4434.997 1.0094V7h2.9991a.998.998 0 01.9942.8827L20 8c0 .5523-.4446 1-1.0009 1H18v8.0012C18 18.6574 16.6584 20 15.0028 20H8.9972C7.3419 20 6 18.6577 6 17.0012V9h-.9991A.998.998 0 014 8c0-.5523.4446-1 1.0009-1H8V5.0094C8 4.4519 8.453 4 8.997 4h6.006zm.996 5H8v8.0012c0 .5126.385.9344.8809.992L8.9972 18h6.0056c.5113 0 .9329-.3853.9905-.8822L16 17.0012 15.999 9zM14 6h-4v1h4V6z" /></svg>
);

export const Trash24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Trash24Svg} {...rest} style={style} />;
}
