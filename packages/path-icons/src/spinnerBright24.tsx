import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const SpinnerBright24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><React.Fragment><g fill="none" fillRule="nonzero"><path fill="#CFDDDF" d="M12 2c5.5228 0 10 4.4772 10 10s-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2zm0 4c-3.3137 0-6 2.6863-6 6s2.6863 6 6 6 6-2.6863 6-6-2.6863-6-6-6z" /><path fill="#01ACCD" d="M22 12c0-5.5228-4.4772-10-10-10v4c3.3137 0 6 2.6863 6 6h4z" /></g></React.Fragment></svg>
);

export const SpinnerBright24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={SpinnerBright24Svg} {...rest} style={style} />;
}
