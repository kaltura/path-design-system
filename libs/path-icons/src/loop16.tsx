import * as React from 'react';
import { CustomIconComponentProps, IconProps } from 'antd/lib/icon';
import {Icon} from 'antd';

// DEVELOPER NOTICE - this file was auto-generated. Don't modify or add icons manually

const Loop16Svg = (props: CustomIconComponentProps) => (
  <svg {...props}><React.Fragment><g fillRule="nonzero"><path d="M2 6c.5128 0 .9355.386.9933.8834L3 7v2c0 1.0544.8159 1.9182 1.8507 1.9945L5 11h3.585l-.2921-.2929-.0832-.0942c-.305-.3923-.2773-.9595.0832-1.32.3905-.3905 1.0237-.3905 1.4142 0l2 2a1.0057 1.0057 0 01.2217.3358.9875.9875 0 01.0675.2842A1.0514 1.0514 0 0112 12l-.0005.0332a1.0058 1.0058 0 01-.003.051L12 12a1.008 1.008 0 01-.0357.2658 1.1116 1.1116 0 01-.0354.1053 1.005 1.005 0 01-.0749.1496.9987.9987 0 01-.1469.1864l.0801-.0903a1.0032 1.0032 0 01-.0069.0086l-.0732.0817-2 2-.0942.0832c-.3923.305-.9595.2773-1.32-.0832l-.0832-.0942c-.305-.3923-.2773-.9595.0832-1.32L8.584 13H5c-2.1422 0-3.891-1.684-3.9951-3.8004L1 9V7c0-.5523.4477-1 1-1zm9-3c2.1422 0 3.891 1.684 3.9951 3.8004L15 7v2c0 .5523-.4477 1-1 1-.5128 0-.9355-.386-.9933-.8834L13 9V7c0-1.0544-.8159-1.9182-1.8507-1.9945L11 5H5c-.5523 0-1-.4477-1-1 0-.5128.386-.9355.8834-.9933L5 3h6z" /><path d="M6.2929 1.2929c.3905-.3905 1.0237-.3905 1.4142 0 .3605.3605.3882.9277.0832 1.32l-.0832.0942L6.415 4l1.2921 1.2929c.3605.3605.3882.9277.0832 1.32l-.0832.0942c-.3605.3605-.9277.3882-1.32.0832l-.0942-.0832-2-2c-.3605-.3605-.3882-.9277-.0832-1.32l.0832-.0942 2-2z" /></g></React.Fragment></svg>
);

export const Loop16Icon = (props: IconProps & { disabled?: boolean }) => {
  const { style : propStyle, disabled, ...rest } = props;
  const style = { ...propStyle, 'fontSize': '16px'};
  if (disabled) {
    style.color = 'rgb(204, 204, 204)';
  }
  return <Icon component={Loop16Svg} {...rest} style={style} />;
}
