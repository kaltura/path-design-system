import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const PlayFull24Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><g fillRule="evenodd"><path d="M20.5038 13.6641l-12.3944 8.263c-.919.6127-2.1608.3643-2.7735-.5547A2 2 0 015 20.263V3.737c0-1.1045.8954-2 2-2a2 2 0 011.1094.336l12.3944 8.2629c.9191.6127 1.1675 1.8544.5547 2.7735a2 2 0 01-.5547.5547z" /></g></svg>
);

export const PlayFull24Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '24px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={PlayFull24Svg} {...rest} style={style} />;
}
