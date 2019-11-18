import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

const <%componentName%>Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><%&paths%></svg>
);

export const <%componentName%>Icon = (props: IconProps) => {
  const { style : propStyle, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '<%size%>px'};
  return <Icon component={<%componentName%>Svg} {...rest} style={style} />;
}
