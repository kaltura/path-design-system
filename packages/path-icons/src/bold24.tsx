import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const Bold24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fill="#333" d="M8 17.65v-1.47h1.275V8.485H8V7h4.89c.795 0 1.35.06 1.905.285.96.375 1.62 1.275 1.62 2.46 0 .99-.48 1.845-1.305 2.28v.03c1.185.36 1.725 1.395 1.725 2.52 0 1.485-.96 2.55-2.115 2.895-.525.15-1.02.18-1.59.18H8zm3.24-6.3h1.875c.84 0 1.305-.585 1.305-1.395 0-.525-.195-.99-.615-1.215-.255-.12-.54-.165-.915-.165h-1.65v2.775zm0 4.725h1.98c.255 0 .54-.03.765-.12.54-.225.855-.825.855-1.5 0-.915-.57-1.545-1.545-1.545H11.24v3.165z"/></svg>
);

export const Bold24Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  return <Icon component={Bold24Svg} {...rest} style={style} />;
}
