import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Loop24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M2 6c.5128 0 .9355.386.9933.8834L3 7v2c0 1.0544.8159 1.9182 1.8507 1.9945L5 11h3.585l-.2921-.2929-.0832-.0942c-.305-.3923-.2773-.9595.0832-1.32.3905-.3905 1.0237-.3905 1.4142 0l2 2a1.0057 1.0057 0 01.2217.3358.9875.9875 0 01.0675.2842A1.0514 1.0514 0 0112 12l-.0005.0332a1.0058 1.0058 0 01-.003.051L12 12a1.008 1.008 0 01-.0357.2658 1.1116 1.1116 0 01-.0354.1053 1.005 1.005 0 01-.0749.1496.9987.9987 0 01-.1469.1864l.0801-.0903a1.0032 1.0032 0 01-.0069.0086l-.0732.0817-2 2-.0942.0832c-.3923.305-.9595.2773-1.32-.0832l-.0832-.0942c-.305-.3923-.2773-.9595.0832-1.32L8.584 13H5c-2.1422 0-3.891-1.684-3.9951-3.8004L1 9V7c0-.5523.4477-1 1-1zm5.7071-4.7071c.3605.3605.3882.9277.0832 1.32l-.0832.0942L7.414 3H11c2.1422 0 3.891 1.684 3.9951 3.8004L15 7v2c0 .5523-.4477 1-1 1-.5128 0-.9355-.386-.9933-.8834L13 9V7c0-1.0544-.8159-1.9182-1.8507-1.9945L11 5H7.415l.2921.2929c.3605.3605.3882.9277.0832 1.32l-.0832.0942c-.3605.3605-.9277.3882-1.32.0832l-.0942-.0832-2-2-.0732-.0817a1.0046 1.0046 0 01-.007-.0086l.0802.0903a1.0081 1.0081 0 01-.1682-.223 1.0446 1.0446 0 01-.0535-.1128.9878.9878 0 01-.0672-.2815A1.0336 1.0336 0 014 4l.0002-.0184a1.0059 1.0059 0 01.0038-.0709L4 4a1.008 1.008 0 01.0357-.2658.9492.9492 0 01.058-.1574 1.0178 1.0178 0 01.116-.1897 1.0373 1.0373 0 01.0832-.0942l2-2c.3905-.3905 1.0237-.3905 1.4142 0z" /></svg>
);

export const Loop24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Loop24Svg} {...rest} style={style} />;
}
