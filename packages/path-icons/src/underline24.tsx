import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Underline24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="evenodd" d="M18 19v1H6v-1h12zM10.995 6.35v1.485h-1.29v5.16c0 .6.135 1.14.36 1.515.375.6 1.11.945 2.01.945.885 0 1.605-.33 1.995-.96.24-.405.36-.9.36-1.515V7.835h-1.275V6.35h4.515v1.485h-1.275v5.16c0 1.035-.285 1.995-.78 2.67-.78 1.02-2.115 1.515-3.54 1.515-1.515 0-2.805-.555-3.54-1.5-.555-.69-.795-1.62-.795-2.685v-5.16H6.465V6.35h4.53z" /></svg>
);

export const Underline24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Underline24Svg} {...rest} style={style} />;
}
