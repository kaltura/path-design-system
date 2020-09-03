import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const ChevronRight24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><path fillRule="nonzero" d="M14.7071 5.2929c.3605.3605.3882.9277.0832 1.32l-.0832.0942L9.415 12l5.2921 5.2929c.3605.3605.3882.9277.0832 1.32l-.0832.0942c-.3605.3605-.9277.3882-1.32.0832l-.0942-.0832-6-6c-.3605-.3605-.3882-.9277-.0832-1.32l.0832-.0942 6-6c.3905-.3905 1.0237-.3905 1.4142 0z" /></svg>
);

export const ChevronRight24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={ChevronRight24Svg} {...rest} style={style} />;
}
