import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const TimeTimeline24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M8.6972 13a2 2 0 011.1094.3359L12 14.797l2.1934-1.4611a2 2 0 01.9408-.3288L15.3028 13H19c1.1046 0 2 .8954 2 2v4c0 1.1046-.8954 2-2 2H5c-1.1046 0-2-.8954-2-2v-4c0-1.1046.8954-2 2-2zm0 2H5v4h14v-4h-3.6972l-2.4708 1.647a1.5 1.5 0 01-1.664 0L8.6972 15zM14 2c1.1046 0 2 .8954 2 2v4.5715a2 2 0 01-.6205 1.448l-2.4763 2.3592c-.5272.5023-1.3353.5513-1.9888.0696l-.1331-.1223-2.231-2.3476A2 2 0 018 8.6006V4c0-1.1046.8954-2 2-2zm0 2h-4v4.6006l1.883 1.9864L14 8.5715V4z" /></svg>
);

export const TimeTimeline24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={TimeTimeline24Svg} {...rest} style={style} />;
}
