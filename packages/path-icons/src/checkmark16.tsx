import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Checkmark16Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path fillRule="nonzero" d="M11.2318 4.3598c.3535-.4243.9841-.4816 1.4084-.128.3916.3263.4706.8887.2023 1.307l-.0743.1014-5 6c-.3495.4195-.9635.4761-1.3823.1492l-.093-.0823-2-2c-.3905-.3905-.3905-1.0237 0-1.4142.3605-.3605.9277-.3882 1.32-.0832l.0942.0832L6.932 9.517l4.2998-5.1572z" /></g></svg>
);

export const Checkmark16Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '16px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Checkmark16Svg} {...rest} style={style} />;
}
